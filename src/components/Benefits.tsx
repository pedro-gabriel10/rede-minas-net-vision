import { motion } from "framer-motion";
import { Cable, Gauge, ShieldCheck, MessageCircle } from "lucide-react";

const items = [
  { icon: Cable, title: "Fibra óptica de qualidade", desc: "Tecnologia FTTH ponta a ponta para máxima performance e baixa latência." },
  { icon: Gauge, title: "Alta velocidade real", desc: "Você contrata e recebe — velocidade entregue de verdade, do plano até o seu Wi-Fi." },
  { icon: ShieldCheck, title: "Estabilidade na conexão", desc: "Infraestrutura redundante para você jogar, trabalhar e assistir sem travar." },
  { icon: MessageCircle, title: "Atendimento via WhatsApp", desc: "Suporte humano e ágil. Resolvemos rápido, sem URA e sem espera." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-28 bg-background">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-[oklch(0.72_0.18_50)] uppercase mb-4">
            Por que Rede Minas Net
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary text-balance">
            Tudo o que sua internet deveria ser.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card p-7 hover:shadow-elegant hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.18_50)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-navy text-white mb-6 group-hover:bg-gradient-orange transition-all duration-500">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
