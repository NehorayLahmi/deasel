import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComparisonSection from "@/components/ComparisonSection";
import TrustSection from "@/components/TrustSection";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ComparisonSection />
        <TrustSection />
        <HowItWorks />
        <FAQSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
