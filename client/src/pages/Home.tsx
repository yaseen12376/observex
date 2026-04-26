import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import DashboardPreview from '@/components/DashboardPreview';
import Statistics from '@/components/Statistics';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';
import DemoBooking from '@/components/DemoBooking';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollToTop from '@/components/ScrollToTop';

/**
 * Home Page Component
 * Design Philosophy: Glassmorphic AI Intelligence
 * - Premium dark theme with cyan and purple accents
 * - Smooth scroll animations
 * - Framer Motion throughout
 * - Investor-ready landing page
 */

export default function Home() {
  return (
    <div className="ox-shell min-h-screen text-white overflow-x-hidden">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <Statistics />
      <Testimonials />
      <WhyChooseUs />
      <DemoBooking />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
