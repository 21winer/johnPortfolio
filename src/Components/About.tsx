import { useRef } from 'react';
import { motion } from 'motion/react';
import { Code2, Palette, Brain, Zap, Brush, Radio } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TIMELINE_ITEMS = [
  { id: 1, icon: Code2 },
  { id: 2, icon: Palette },
  { id: 3, icon: Brain },
  { id: 4, icon: Zap },
  { id: 5, icon: Brush },
  { id: 6, icon: Radio },
] as const;

function About() {
  const { t } = useLanguage();
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
        <div className="absolute top-10 left-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-main relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-left"
          style={{ marginBottom: 56 }}
        >
          <h2 className="section-title">{t.about.title}</h2>
          <div className="section-underline" style={{ margin: '0 0 12px' }} />
          <p className="section-subtitle">{t.about.subtitle}</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative max-w-4xl mx-auto py-6 md:py-10"
        >
          {/* Vertical line: left on mobile & tablet, centered on large screens */}
          <div className="absolute top-6 bottom-6 md:top-10 md:bottom-10 left-[15px] lg:left-1/2 lg:-translate-x-1/2 w-0.5 bg-orange-500/20 rounded-full"></div>

          {/* Timeline items — all on the right of the line up to lg, then alternating */}
          <div className="space-y-12 lg:space-y-20">
            {TIMELINE_ITEMS.map((item, i) => {
              const Icon = item.icon;
              const data = t.about.items[item.id];
              const isRight = i % 2 === 0; // even index → card on the right (large screens)

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`group relative flex items-center lg:justify-between ${isRight ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Spacer for the opposite side (large screens only) */}
                  <div className="hidden lg:block lg:w-5/12"></div>

                  {/* Timeline dot */}
                  <div className="absolute left-[15px] lg:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-[#0a141d] border-2 border-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)] transition-all duration-300 group-hover:scale-150 group-hover:bg-orange-500"></div>

                  {/* Content card — margins keep it clear of the line (inner side) and the edges */}
                  <div
                    className={`w-full pl-12 pr-2 my-2 lg:p-0 lg:my-3 lg:w-5/12 ${
                      isRight ? 'lg:ml-10' : 'lg:mr-10'
                    }`}
                  >
                    <div className="p-7 md:p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 light:from-white light:to-gray-50 light:border-gray-200 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/40">
                      <h3 className="text-lg md:text-xl font-bold text-orange-500 mb-2 flex items-center gap-2.5">
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        {data.title}
                      </h3>
                      <p className="text-gray-400 light:text-gray-600 leading-relaxed text-sm md:text-base">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;