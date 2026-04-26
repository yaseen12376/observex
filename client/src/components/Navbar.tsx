import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Navbar Component
 * Design Philosophy: Glassmorphic with subtle animations
 * - Sticky positioning with blur effect
 * - Smooth transitions on scroll
 * - Mobile-responsive menu
 */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-xl bg-[rgba(5,8,16,0.9)] border-b border-white/10 py-3'
          : 'py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <div className="w-10 h-10 rounded-[0.62rem] bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-[#050810] font-bold text-sm tracking-[0.08em]">
            OX
          </div>
          <span className="text-white text-[1.72rem] hidden sm:inline tracking-[0.06em] leading-none">
            Observe<span className="text-cyan-400">X</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="ox-nav-link"
              whileHover={{ color: '#ffffff' }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            className="ox-btn-ghost h-10 px-5"
          >
            <a href="#dashboard">Watch Demo</a>
          </Button>
          <Button asChild className="ox-btn-primary h-10 px-5">
            <a href="#demo">Book Demo</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white border border-white/20 rounded-md p-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden backdrop-blur-xl bg-[rgba(5,8,16,0.96)] border-t border-white/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="ox-nav-link py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild variant="outline" className="w-full ox-btn-ghost">
                <a href="#dashboard" onClick={() => setIsOpen(false)}>
                  Watch Demo
                </a>
              </Button>
              <Button asChild className="w-full ox-btn-primary">
                <a href="#demo" onClick={() => setIsOpen(false)}>
                  Book Demo
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
