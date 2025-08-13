import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Mission() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{ scale }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r 
            from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          L'Histoire et la Vision d'Alyah Knowledge dans l'Investissement Crypto
        </motion.h2>

        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Le nom « Alyah Knowledge Crypto Investissement » symbolise une véritable ascension vers 
            la maîtrise des nouvelles technologies financières. Le terme « Alyah » évoque l'idée de 
            montée, d'élévation, illustrant la progression vers de nouveaux sommets tant sur le plan 
            financier que sur celui de la compréhension.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            L'avènement de la technologie blockchain et des cryptomonnaies représente une révolution 
            majeure dans le monde de l'investissement. Cette technologie, bien que porteuse d'énormes 
            opportunités, requiert du temps, de la rigueur et un investissement personnel conséquent 
            pour être véritablement maîtrisée.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Notre Mission dans l'Écosystème Crypto
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Alyah Knowledge se positionne comme un accompagnateur de confiance, un véritable GPS qui 
              guide les investisseurs dans leurs choix, en minimisant les risques et en leur apportant 
              des conseils éclairés. Nous aidons chacun à naviguer dans cet univers complexe et en 
              perpétuelle évolution, en combinant expertise et pédagogie.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-600 leading-relaxed font-medium"
          >
            Notre projet incarne à la fois l'aspiration à une montée en compétence et en richesse, 
            et la conviction qu'une véritable réussite passe par l'alliance de la connaissance et 
            de l'investissement en temps et en argent.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}