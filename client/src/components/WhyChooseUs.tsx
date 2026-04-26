import { motion } from 'framer-motion';
import { Zap, Brain, Shield, TrendingUp } from 'lucide-react';

/**
 * Why Choose Us Section Component
 * Design Philosophy: Highlight AI behavior analysis advantage
 * - Competitive differentiation
 * - Animated feature comparison
 * - Premium positioning
 */

const advantages = [
  {
    icon: Brain,
    title: 'AI Behavior Analysis',
    description: 'Our proprietary AI learns normal behavior patterns and detects anomalies in real-time, preventing threats before they escalate.',
    color: 'from-purple-400 to-pink-400',
  },
  {
    icon: Zap,
    title: 'Proactive Prevention',
    description: 'Don\'t wait for incidents to happen. Our system predicts and prevents threats with millisecond-level response times.',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    icon: Shield,
    title: 'Multi-Layer Protection',
    description: 'Face recognition, weapon detection, sound analysis, and behavior patterns work together for comprehensive security.',
    color: 'from-cyan-400 to-blue-400',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learning',
    description: 'The AI improves over time as you mark visitors as safe or suspicious, becoming smarter with every interaction.',
    color: 'from-green-400 to-emerald-400',
  },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="why" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 10, repeat: Infinity } as any}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="ox-badge mb-5">
            <span className="ox-badge-dot" />
            Comparison
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Why Choose</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ObserveX
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're not just another security camera system. We're an intelligent security partner that thinks, learns, and protects.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${advantage.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {advantage.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 20px rgba(6, 182, 212, 0.1)',
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-cyan-400 font-semibold">ObserveX</th>
                    <th className="px-6 py-4 text-center text-gray-400 font-semibold">Traditional CCTV</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'AI-Powered Detection', observex: true, traditional: false },
                    { feature: 'Proactive Threat Prevention', observex: true, traditional: false },
                    { feature: 'Face Recognition', observex: true, traditional: false },
                    { feature: 'Weapon Detection', observex: true, traditional: false },
                    { feature: 'Behavior Analysis', observex: true, traditional: false },
                    { feature: 'Sound-Based Detection', observex: true, traditional: false },
                    { feature: 'Real-Time Alerts', observex: true, traditional: false },
                    { feature: 'Mobile Dashboard', observex: true, traditional: false },
                    { feature: 'Continuous Learning', observex: true, traditional: false },
                    { feature: 'Passive Recording Only', observex: false, traditional: true },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-gray-300">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.observex ? (
                          <span className="text-cyan-400 font-semibold">✓</span>
                        ) : (
                          <span className="text-gray-500">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.traditional ? (
                          <span className="text-gray-400 font-semibold">✓</span>
                        ) : (
                          <span className="text-gray-500">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
