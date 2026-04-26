import { motion } from 'framer-motion';
import { Camera, Cpu, AlertTriangle, Bell, User } from 'lucide-react';

/**
 * How It Works Section Component
 * Design Philosophy: Animated flow with connecting lines
 * - Step-by-step process visualization
 * - Animated transitions between steps
 * - Icon-based flow diagram
 */

const steps = [
  {
    icon: Camera,
    title: 'Camera Detection',
    description: 'Multi-camera surveillance captures activity',
  },
  {
    icon: Cpu,
    title: 'AI Detection',
    description: 'Real-time analysis of video feeds',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Analysis',
    description: 'Threat level assessment',
  },
  {
    icon: Bell,
    title: 'Instant Alert',
    description: 'Immediate notification sent',
  },
  {
    icon: User,
    title: 'User Action',
    description: 'Take control and respond',
  },
];

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="how-it-works" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0] }}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">How It Works</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Real-Time Threat Detection
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our AI processes security data in milliseconds to keep you protected 24/7
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Desktop Flow */}
          <div className="hidden md:flex items-center justify-between gap-4 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex-1 flex flex-col items-center">
                  {/* Step Circle */}
                  <motion.div
                    variants={stepVariants}
                    className="relative mb-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 flex items-center justify-center hover:border-cyan-400 transition-all duration-300 group cursor-pointer"
                      style={{
                        boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)',
                      }}
                    >
                      <Icon className="w-10 h-10 text-cyan-400" />
                    </div>
                    <div className="absolute inset-0 rounded-full animate-pulse"
                      style={{
                        boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
                      }}
                    />
                  </motion.div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 left-[calc(50%+50px)] w-[calc(100%-100px)] h-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                  )}

                  {/* Text */}
                  <h3 className="text-lg font-bold text-white text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm text-center">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile Flow */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className="flex gap-4"
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-[calc(100%+8px)] w-1 h-6 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline Stats */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Detection Speed', value: '<100ms' },
            { label: 'Accuracy', value: '99.2%' },
            { label: 'Response Time', value: 'Instant' },
          ].map((stat, i) => (
            <div key={i} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-4 text-center">
              <p className="text-cyan-400 text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
