import { useRef } from 'react';
import { motion } from 'motion/react';
import { Code2, Palette, Brain, Zap, Brush, Radio } from 'lucide-react';

const TIMELINE_ITEMS = [
  {
    id: 1,
    title: 'Développement Front-End',
    description:
      "Expertise en HTML, CSS, JS, TypeScript, React et Next.js pour créer des interfaces fluides, performantes et accessibles.",
    icon: Code2,
    gradient: 'from-blue-500 to-cyan-500',
    color: 'text-blue-400',
  },
  {
    id: 2,
    title: 'Design UI/UX assisté par IA',
    description:
      "Conception de parcours utilisateurs optimisés via Figma, Design Systems, et prototypage haute fidélité augmenté par l'IA.",
    icon: Palette,
    gradient: 'from-purple-500 to-pink-500',
    color: 'text-purple-400',
  },
  {
    id: 3,
    title: 'Intelligence Artificielle',
    description:
      "Intégration d'outils IA (Claude, LLMs) et maîtrise du Prompt Engineering pour booster la créativité et la productivité.",
    icon: Brain,
    gradient: 'from-green-500 to-emerald-500',
    color: 'text-green-400',
  },
  {
    id: 4,
    title: 'Automatisation IA',
    description:
      "Création de workflows intelligents avec Zapier, Make et scripts Python pour optimiser les processus métier.",
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-500',
    color: 'text-yellow-400',
  },
  {
    id: 5,
    title: 'Création Graphique',
    description:
      "Direction artistique, branding et retouche avancée sous Photoshop pour une identité visuelle forte et mémorable.",
    icon: Brush,
    gradient: 'from-red-500 to-pink-500',
    color: 'text-red-400',
  },
  {
    id: 6,
    title: 'Streaming Professionnel',
    description:
      "Mise en place de régies virtuelles avec vMix et NDI pour des événements live de qualité broadcast.",
    icon: Radio,
    gradient: 'from-indigo-500 to-blue-500',
    color: 'text-indigo-400',
  },
];

function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="section-gap relative overflow-hidden" id="about" ref={sectionRef}>
      {/* Background gradient elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-main relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            À Propos de Moi
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Un profil multidisciplinaire alliant technique, créativité et intelligence artificielle.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative pl-6 md:pl-12"
        >
          {/* Vertical timeline line on the left */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

          {/* Timeline items stacked vertically */}
          <div className="space-y-10">
            {TIMELINE_ITEMS.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div key={item.id} variants={itemVariants} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 z-10 w-14 h-14 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 flex items-center justify-center">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>

                  {/* Content */}
                  <motion.div whileHover={{ x: 0 }} transition={{ duration: 0.3 }} className="flex-1 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm group cursor-pointer">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 -z-10`}></div>

                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <span className={`inline-block w-1 h-6 bg-gradient-to-b ${item.gradient} rounded-full`}></span>
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-gray-700/30 flex gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient}`}></div>
                      <div className="flex-1 h-2 bg-gradient-to-r from-gray-700 to-transparent rounded-full opacity-40"></div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm">
            ✨ Une expertise en constante évolution, alimentée par la passion pour l'innovation
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;