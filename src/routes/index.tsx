import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Coverage } from "@/components/Coverage";
import { Plans } from "@/components/Plans";
import { Differentials } from "@/components/Differentials";
import { Testimonials } from "@/components/Testimonials";
import { HowItWorks } from "@/components/HowItWorks";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rede Minas Net — Internet Fibra Óptica em Campo Belo, Candeias e Região" },
      { name: "description", content: "Internet fibra óptica rápida e estável em Campo Belo, Santana do Jacaré, Candeias e zonas rurais. Atendimento humano via WhatsApp. Consulte disponibilidade." },
      { property: "og:title", content: "Rede Minas Net — Internet Fibra Óptica de Verdade" },
      { property: "og:description", content: "Provedora regional de fibra óptica em Minas Gerais. Conexão estável, suporte ágil, atendimento humanizado." },
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
        <FinalCta />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
