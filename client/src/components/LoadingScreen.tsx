import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Loading Screen Component
 * Design Philosophy: Premium loading animation
 * - Animated scanning effect
 * - Glassmorphic design
 * - Smooth fade out
 */

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Logo */}
        <motion.div
          className="mb-8"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity } as any}
        >
          <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-3xl">OX</span>
          </div>
        </motion.div>

        {/* Brand Name */}
        <h1 className="text-3xl font-bold text-white mb-2">ObserveX</h1>
        <p className="text-gray-400 mb-8">AI-Powered Security</p>

        {/* Scanning Animation */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <motion.div
            className="absolute inset-0 border-2 border-transparent rounded-lg"
            style={{
              borderTopColor: '#06b6d4',
              borderRightColor: '#06b6d4',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' } as any}
          />
          <motion.div
            className="absolute inset-4 border border-cyan-500/30 rounded-lg"
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity } as any}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-cyan-400 font-bold"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity } as any}
            >
              Loading...
            </motion.div>
          </div>
        </div>

        {/* Status Text */}
        <motion.p
          className="text-gray-500 text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity } as any}
        >
          Initializing security systems
        </motion.p>
      </div>
    </motion.div>
  );
}
