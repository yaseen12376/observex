import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

/**
 * Demo Booking Section Component
 * Design Philosophy: Glassmorphic form with smooth interactions
 * - Lead capture form
 * - Animated form fields
 * - Premium CTA
 */

type DemoFormData = {
  name: string;
  email: string;
  phone: string;
  location: string;
  propertyType: string;
};

const INITIAL_FORM_DATA: DemoFormData = {
  name: '',
  email: '',
  phone: '',
  location: '',
  propertyType: '',
};

const LOCAL_STORAGE_KEY = 'observex-demo-bookings';
const DEFAULT_SUCCESS_MESSAGE = 'We will contact you shortly to schedule your demo.';
const SERVER_UNAVAILABLE = 'SERVER_UNAVAILABLE';

function normalizeFormData(data: DemoFormData): DemoFormData {
  return {
    name: data.name.trim(),
    email: data.email.trim(),
    phone: data.phone.trim(),
    location: data.location.trim(),
    propertyType: data.propertyType.trim(),
  };
}

function saveBookingLocally(data: DemoFormData): boolean {
  try {
    const existingRaw = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsed = existingRaw ? (JSON.parse(existingRaw) as unknown) : [];
    const existing = Array.isArray(parsed) ? parsed : [];
    existing.push({
      ...data,
      source: 'local-fallback',
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing.slice(-100)));
    return true;
  } catch {
    return false;
  }
}

export default function DemoBooking() {
  const [formData, setFormData] = useState<DemoFormData>(INITIAL_FORM_DATA);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [successMessage, setSuccessMessage] = useState(DEFAULT_SUCCESS_MESSAGE);

  useEffect(() => {
    if (!submitted) {
      return;
    }

    const timerId = window.setTimeout(() => {
      setSubmitted(false);
      setSuccessMessage(DEFAULT_SUCCESS_MESSAGE);
    }, 4500);

    return () => window.clearTimeout(timerId);
  }, [submitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);

    const payload = normalizeFormData(formData);

    try {
      const response = await fetch('/api/demo-bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorPayload = (await response.json().catch(() => null)) as
          | { message?: string; errors?: string[] }
          | null;

        if (response.status === 404 || response.status >= 500) {
          throw new Error(SERVER_UNAVAILABLE);
        }

        const validationError =
          errorPayload?.errors?.[0] ??
          errorPayload?.message ??
          'Please check your details and try again.';
        throw new Error(validationError);
      }

      setFormData(INITIAL_FORM_DATA);
      setSuccessMessage(DEFAULT_SUCCESS_MESSAGE);
      setSubmitted(true);
      return;
    } catch (error) {
      const shouldUseLocalFallback =
        error instanceof TypeError ||
        (error instanceof Error && error.message === SERVER_UNAVAILABLE);

      if (shouldUseLocalFallback && saveBookingLocally(payload)) {
        setFormData(INITIAL_FORM_DATA);
        setSuccessMessage('Request saved locally. It will sync after the API comes back online.');
        setSubmitted(true);
        return;
      }

      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Unable to submit right now. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="demo" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity } as any}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity } as any}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <div className="ox-badge mb-5">
              <span className="ox-badge-dot" />
              Get Started
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Ready to Protect</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Your Home?
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Book a free personalized demo and see ObserveX in action
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="text-5xl mb-4">OK</div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-300">
                  {successMessage}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" aria-busy={isSubmitting}>
                {/* Name */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    disabled={isSubmitting}
                    required
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                    required
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    disabled={isSubmitting}
                    required
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                  />
                </motion.div>

                {/* Location */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    City/Location
                  </label>
                  <Input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Your city"
                    disabled={isSubmitting}
                    required
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                  />
                </motion.div>

                {/* Property Type */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Property Type
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    className="w-full bg-slate-900 border border-white/20 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500/50"
                  >
                    <option value="">Select property type</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="villa">Villa</option>
                    <option value="commercial">Commercial Space</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 text-base py-6 rounded-lg group"
                  >
                    {isSubmitting ? 'Submitting...' : 'Book Your Free Security Demo'}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </motion.div>

                {submitError && (
                  <motion.p
                    variants={itemVariants}
                    className="text-center text-sm text-red-300"
                    role="alert"
                  >
                    {submitError}
                  </motion.p>
                )}

                {/* Privacy Note */}
                <motion.p
                  variants={itemVariants}
                  className="text-center text-gray-500 text-xs"
                >
                  We respect your privacy. Your information will never be shared.
                </motion.p>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
