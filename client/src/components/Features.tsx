import { motion } from 'framer-motion';
import {
  Zap,
  Brain,
  Shield,
  Wifi,
  Smartphone,
  Users,
  Lock,
  Eye,
} from 'lucide-react';

/**
 * Features Section Component
 * Design Philosophy: Glassmorphic cards with hover animations
 * - Grid layout with animated reveals
 * - Icon-based feature cards
 * - Smooth hover effects and glows
 */

const features = [
  {
    icon: Eye,
    title: 'Face Recognition',
    description: 'Recognize known visitors and detect unknown people instantly',
    color: 'from-cyan-400 to-blue-400',
  },
  {
    icon: Brain,
    title: 'Behavior Analysis',
    description: 'Detect loitering, repeated visits, and unusual presence patterns',
    color: 'from-purple-400 to-pink-400',
  },
  {
    icon: Zap,
    title: 'Weapon Detection',
    description: 'Identify dangerous objects using advanced computer vision',
    color: 'from-red-400 to-orange-400',
  },
  {
    icon: Shield,
    title: 'Sound Detection',
    description: 'Detect door banging, glass breaking, and forced entry attempts',
    color: 'from-green-400 to-emerald-400',
  },
  {
    icon: Wifi,
    title: 'Auto Door Answering',
    description: 'Remote communication with visitors even when you are away',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    icon: Users,
    title: 'Threat Classification',
    description: 'Mark visitors as safe or suspicious to improve AI learning',
    color: 'from-indigo-400 to-purple-400',
  },
  {
    icon: Lock,
    title: 'Multi-Camera Support',
    description: 'Monitor multiple locations from one unified dashboard',
    color: 'from-orange-400 to-yellow-400',
  },
  {
    icon: Smartphone,
    title: 'Mobile + Web Dashboard',
    description: 'Real-time monitoring and alerts from anywhere, anytime',
    color: 'from-pink-400 to-rose-400',
  },
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="features" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Powerful Features</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Built for Modern Homes
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Advanced AI capabilities that work together to keep your home safe, intelligent, and always connected.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 20px rgba(6, 182, 212, 0.1)',
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
