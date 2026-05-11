import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Internet Fibra em Campo Belo MG, Santana do Jacaré e Candeias | Rede Minas Net" },
      { name: "description", content: "Provedor de internet fibra óptica em Campo Belo MG, Santana do Jacaré MG, Candeias MG e zonas rurais. Conexão estável, suporte rápido via WhatsApp. Consulte disponibilidade." },
      { name: "keywords", content: "internet fibra Campo Belo MG, internet fibra Santana do Jacaré MG, internet fibra Candeias MG, provedor de internet fibra, internet rural Minas Gerais" },
      { property: "og:title", content: "Internet Fibra em Campo Belo, Santana do Jacaré e Candeias" },
      { property: "og:description", content: "Provedor regional de fibra óptica em Minas Gerais. Conexão estável e atendimento humanizado via WhatsApp." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
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
