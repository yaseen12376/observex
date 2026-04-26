import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Statistics Section Component
 * Design Philosophy: Animated counters with glassmorphic cards
 * - Real-time counter animations
 * - Trust-building statistics
 * - NCRB theft statistic highlighted
 */

interface CounterProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ end, label, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2;
    const increment = end / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-gray-400 text-lg">{label}</p>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
            <span className="text-white">Why Security Matters</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              The Numbers Tell the Story
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <AnimatedCounter
            end={400000}
            label="Theft Cases Yearly in India"
            suffix="+"
          />
          <AnimatedCounter
            end={99}
            label="Detection Accuracy"
            suffix="%"
          />
          <AnimatedCounter
            end={24}
            label="Hour Monitoring"
            prefix="24/"
          />
        </div>

        {/* Featured Statistic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="backdrop-blur-md bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500/30 to-orange-500/30 border-2 border-red-500/50 flex items-center justify-center">
                  <span className="text-3xl">📊</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  India Records Over <span className="text-red-400">4 Lakh Theft Cases</span> Yearly
                </h3>
                <p className="text-gray-300 mb-4">
                  According to the National Crime Records Bureau (NCRB) Crime in India Report 2023, urban areas face unprecedented security challenges. Traditional reactive security systems fail to prevent these incidents.
                </p>
                <p className="text-sm text-gray-400 italic">
                  Source: National Crime Records Bureau (NCRB) Crime in India Report 2023
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 grid md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { icon: '🔒', label: 'Bank-Grade Security' },
            { icon: '⚡', label: 'Real-Time Processing' },
            { icon: '🎯', label: 'AI-Powered' },
            { icon: '📱', label: 'Always Connected' },
          ].map((item, i) => (
            <div key={i} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-gray-300 text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
