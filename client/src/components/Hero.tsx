import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Hero Section Component
 * Design Philosophy: Glassmorphic AI Intelligence
 * - Animated gradient background
 * - Floating particles and data nodes
 * - Premium typography with gradient text
 * - Cinematic motion-heavy design
 */

export default function Hero() {
  const stats = [
    { value: '99%', label: 'Accuracy' },
    { value: '<2s', label: 'Response' },
    { value: '24/7', label: 'Monitoring' },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-12 right-10 w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-3xl"
          animate={{ y: [0, 34, 0], x: [0, -16, 0] }}
          transition={{ duration: 8, repeat: Infinity } as any}
        />
        <motion.div
          className="absolute bottom-10 left-8 w-[24rem] h-[24rem] rounded-full bg-violet-500/12 blur-3xl"
          animate={{ y: [0, -28, 0], x: [0, 14, 0] }}
          transition={{ duration: 9, repeat: Infinity } as any}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center min-h-[calc(100vh-8rem)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="ox-badge mb-6">
              <span className="ox-badge-dot" />
              AI-Powered Security Platform
            </div>

            <h1 className="ox-hero-title mb-6">
              <span className="block text-white">Security That</span>
              <span className="line2 block">Thinks First</span>
            </h1>

            <p className="ox-sub mb-9">
              AI-powered home protection with real-time behavior analysis, face recognition,
              and proactive threat detection. Prevent incidents before they occur.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Button size="lg" asChild className="ox-btn-primary h-11 px-7 text-sm">
                <a href="#demo">
                  Book Free Demo
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="ox-btn-ghost h-11 px-7 text-sm">
                <a href="#dashboard">
                  <Play size={18} className="mr-2" />
                  Watch Prototype
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 max-w-md gap-4 border-t border-white/10 pt-6">
              {stats.map((item) => (
                <div key={item.label}>
                  <p className="text-cyan-400 text-[2rem] leading-none">{item.value}</p>
                  <p className="text-[0.64rem] uppercase tracking-[0.12em] text-slate-500 mt-1 font-mono">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative h-[480px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            <div className="absolute inset-0 ox-card overflow-hidden">
              <motion.div
                className="absolute inset-[12%] rounded-full border border-cyan-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' } as any}
              />
              <motion.div
                className="absolute inset-[21%] rounded-full border border-violet-400/25"
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' } as any}
              />
              <motion.div
                className="absolute inset-[33%] rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/20"
                animate={{ scale: [0.96, 1.05, 0.96] }}
                transition={{ duration: 4, repeat: Infinity } as any}
              />
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div>
                  <p className="text-slate-400 text-[0.65rem] font-mono tracking-[0.14em] uppercase mb-2">
                    Neural Defense Core
                  </p>
                  <p className="text-cyan-300 text-3xl">ACTIVE</p>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute top-8 left-4 ox-hud-card px-4 py-3"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity } as any}
            >
              <p className="text-[0.58rem] text-slate-500 uppercase tracking-[0.14em] font-mono">Threat Level</p>
              <p className="text-2xl text-emerald-400 leading-none mt-1">Secure</p>
            </motion.div>

            <motion.div
              className="absolute bottom-10 right-3 ox-hud-card px-4 py-3"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity } as any}
            >
              <p className="text-[0.58rem] text-slate-500 uppercase tracking-[0.14em] font-mono">AI Detections</p>
              <p className="text-2xl text-cyan-300 leading-none mt-1">2,847</p>
            </motion.div>

            <motion.div
              className="absolute top-[42%] -left-2 ox-hud-card px-4 py-3"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.8, repeat: Infinity } as any}
            >
              <p className="text-[0.58rem] text-slate-500 uppercase tracking-[0.14em] font-mono">Face Match</p>
              <p className="text-2xl text-cyan-300 leading-none mt-1">99.2%</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
