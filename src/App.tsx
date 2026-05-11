import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Coverage } from "@/components/Coverage";
import { Plans } from "@/components/Plans";
import { Differentials } from "@/components/Differentials";
import { Testimonials } from "@/components/Testimonials";
import { HowItWorks } from "@/components/HowItWorks";
import { RegionalTrust } from "@/components/RegionalTrust";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Coverage />
        <Plans />
        <Differentials />
        <HowItWorks />
        <Testimonials />
        <RegionalTrust />
        <FinalCta />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
