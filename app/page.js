import  HeroSection  from "./pages/HeroSection";
import { FeaturesSection } from "./pages/FeaturesSection";
import { CTASection } from "./pages/CTASection";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import AnimatedDemoSection from "./pages/AnimatedDemoSection";
import PricingSection from "./pages/PricingSection";
import BackgroundLayout from "./pages/BackgroundLayout";
import { IntroSection } from "./pages/IntroSection";
import VideoCarousel from "./pages/video-carousel";
import TestimonialsPage from "./pages/Testimonials";
import ROIStatistics from "./pages/ROIStatistics";
import Platform from "./pages/Platforms";

export default function Home() {
  return (
    <BackgroundLayout>
      <Header />
      <HeroSection />
      <VideoCarousel/>
      <FeaturesSection />
      <IntroSection/>
      <AnimatedDemoSection />      
      <CTASection />
      <ROIStatistics/>
      <Platform/>
      <PricingSection />
      <TestimonialsPage/>
      <Footer />
    </BackgroundLayout>
  );
}
