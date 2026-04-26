import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

/**
 * Problem Section Component
 * Design Philosophy: Glassmorphic comparison with animated cards
 * - Traditional vs AI security comparison
 * - Animated card reveals
 * - Clear visual differentiation
 */

export default function Problem() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const problems = [
    'Suspicious loitering',
    'Repeated visits by unknown people',
    'Unusual movement near the house',
    'Early break-in attempts',
    'Dangerous visitors carrying weapons',
  ];

  return (
    <section id="problem" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity } as any}
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
            The Problem
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">The Problem with</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Traditional Security
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Most home security systems are reactive—they only help after an incident happens. Your home deserves better.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Traditional CCTV Card */}
          <motion.div
            variants={cardVariants}
            className="backdrop-blur-md bg-red-500/10 border border-red-500/30 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="text-red-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Traditional CCTV</h3>
            </div>
            <p className="text-gray-300 mb-6 font-medium">Reactive • After the fact • Passive recording</p>
            <ul className="space-y-3">
              {problems.map((problem, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-red-300 text-sm font-semibold">Result: Fear, delayed response, financial loss</p>
          </motion.div>

          {/* ObserveX Card */}
          <motion.div
            variants={cardVariants}
            className="backdrop-blur-md bg-cyan-500/10 border border-cyan-500/50 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="text-cyan-400" size={28} />
                <h3 className="text-2xl font-bold text-white">ObserveX AI</h3>
              </div>
              <p className="text-gray-300 mb-6 font-medium">Proactive • Before threats • AI-powered prevention</p>
              <ul className="space-y-3">
                {problems.map((problem, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>{problem} detected instantly</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-cyan-300 text-sm font-semibold">Result: Peace of mind, instant alerts, prevention</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Key Differentiator */}
        <motion.div
          className="mt-16 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="backdrop-blur-md bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3">Our Advantage</h3>
            <p className="text-gray-300 text-lg">
              <span className="text-cyan-400 font-semibold">AI Behavior Analysis</span> detects threats before they escalate. We don't just record—we predict and prevent.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
