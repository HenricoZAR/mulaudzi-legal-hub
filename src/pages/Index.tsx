import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import AttorneysSection from "@/components/AttorneysSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import ServicesSlider from "@/components/ServicesSlider";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <AttorneysSection />
        <WorkProcessSection />
        <ServicesSlider />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
