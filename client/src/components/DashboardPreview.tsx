import { motion } from 'framer-motion';
import { Smartphone, Monitor } from 'lucide-react';

/**
 * Dashboard Preview Section Component
 * Design Philosophy: Showcase product with generated images
 * - Desktop and mobile dashboard previews
 * - Animated reveals
 * - Professional product showcase
 */

export default function DashboardPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="dashboard" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0] }}
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
            <span className="text-white">Live Dashboard</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Real-Time Monitoring
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Monitor your entire property from a single unified dashboard. Access from desktop or mobile, anytime, anywhere.
          </p>
        </motion.div>

        {/* Dashboard Images */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Desktop Dashboard */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/10">
                <Monitor size={18} className="text-cyan-400" />
                <span className="text-white font-semibold text-sm">Desktop Dashboard</span>
              </div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663600379515/HVacuvGnZ46pkTXiwkZJtE/dashboard-preview-jihiM6jJV2hfduoDhBSxLr.webp"
                alt="ObserveX Dashboard"
                className="w-full rounded-lg"
              />
            </div>
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                boxShadow: 'inset 0 0 30px rgba(6, 182, 212, 0.1)',
              }}
            />
          </motion.div>

          {/* Mobile Dashboard */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/10">
                <Smartphone size={18} className="text-cyan-400" />
                <span className="text-white font-semibold text-sm">Mobile App</span>
              </div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663600379515/HVacuvGnZ46pkTXiwkZJtE/smart-home-security-KSvtn2kTRMAc7xKa63iqaM.webp"
                alt="ObserveX Mobile"
                className="w-full rounded-lg"
              />
            </div>
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                boxShadow: 'inset 0 0 30px rgba(6, 182, 212, 0.1)',
              }}
            />
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { icon: '📹', label: 'Multi-Camera View', desc: 'Monitor all cameras simultaneously' },
            { icon: '⚡', label: 'Real-Time Alerts', desc: 'Instant notifications on threats' },
            { icon: '📊', label: 'Analytics Dashboard', desc: 'Detailed threat reports and insights' },
          ].map((feature, i) => (
            <div key={i} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-white font-semibold mb-1">{feature.label}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
