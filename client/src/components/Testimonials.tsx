import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

/**
 * Testimonials Section Component
 * Design Philosophy: Professional testimonial cards with ratings
 * - Customer success stories
 * - Star ratings
 * - Glassmorphic cards
 */

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Homeowner, Mumbai',
    image: '👨‍💼',
    content:
      'ObserveX detected a suspicious person loitering near my house at 2 AM. I got an instant alert and was able to contact local authorities immediately. This system gives me peace of mind.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Apartment Manager, Bangalore',
    image: '👩‍💼',
    content:
      'Managing security for 50+ apartments was a nightmare. ObserveX has made it effortless. The AI behavior analysis catches issues before they become problems.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Shop Owner, Delhi',
    image: '👨‍🏫',
    content:
      'As a retail shop owner, I needed proactive security. ObserveX\'s weapon detection feature caught a potential threat before it escalated. Absolutely invaluable.',
    rating: 5,
  },
  {
    name: 'Neha Gupta',
    role: 'Homeowner, Pune',
    image: '👩‍🔬',
    content:
      'The multi-camera support and unified dashboard make monitoring my entire property seamless. The mobile app keeps me connected even when I\'m traveling.',
    rating: 5,
  },
];

export default function Testimonials() {
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
    <section id="testimonials" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
            Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Trusted by</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Homeowners & Businesses
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real stories from real customers who have transformed their security
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">Backed by leading institutions</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {['BS Abdur Rahman Crescent', 'AI Innovation Lab', 'Security Excellence'].map((badge, i) => (
              <div key={i} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <p className="text-gray-300 text-sm font-medium">{badge}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
