import { supabase } from './supabaseClient';
import { stripeProducts } from './stripe-config';

export async function createCheckoutSession(priceId: string, mode: 'payment' | 'subscription', promoCode: string = '') {
  try {
    // Get the current URL to construct success and cancel URLs
    const baseUrl = window.location.origin;
    const successUrl = `${baseUrl}/checkout/success?success=true`;
    const cancelUrl = `${baseUrl}/solutions`;

    // Call the Supabase Edge Function
    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`,
      },
      body: JSON.stringify({
        price_id: priceId,
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: mode,
        promotion_code: promoCode
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create checkout session');
    }

    const { url } = await response.json();
    return url;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
}

export async function getUserSubscription() {
  try {
    const { data: subscription, error } = await supabase
      .from('stripe_user_subscriptions')
      .select('*')
      .maybeSingle(); // Changed from .single() to .maybeSingle() to handle no subscription case

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    return subscription;
  } catch (error) {
    console.error('Error fetching subscription:', error);
    return null;
  }
}

export async function getUserOrders() {
  try {
    const { data: orders, error } = await supabase
      .from('stripe_user_orders')
      .select('*')
      .order('order_date', { ascending: false });

    if (error) {
      throw error;
    }

    return orders;
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
}

export function getPlanNameFromPriceId(priceId: string) {
  for (const [key, product] of Object.entries(stripeProducts)) {
    if (product.priceId === priceId) {
      return product.name || 'Abonnement';
    }
  }
  return 'Abonnement';
}