import { motion } from "framer-motion";
import { Heart, Building2, Activity, Headphones } from "lucide-react";

const items = [
  { icon: Heart, title: "Atendimento humanizado", desc: "Você fala com pessoas, não com robôs. Cada cliente é tratado pelo nome." },
  { icon: Building2, title: "Empresa regional", desc: "Estamos na sua cidade. Conhecemos a região, a rua, e cuidamos de perto." },
  { icon: Activity, title: "Foco em estabilidade", desc: "Investimento contínuo em rede para que sua conexão simplesmente funcione." },
  { icon: Headphones, title: "Suporte ágil via WhatsApp", desc: "Mensagem respondida rápido, técnico no local quando precisar." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-28 bg-background overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[oklch(0.55_0.16_250)/0.08] rounded-full blur-3xl" />

      <div className="container mx-auto px-5 lg:px-8 relative">
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-[oklch(0.72_0.18_50)] uppercase mb-4">
            Diferenciais
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary text-balance">
            O cuidado de quem é da região.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex gap-5 rounded-2xl border border-border bg-card p-7 hover:border-[oklch(0.72_0.18_50)/0.4] hover:shadow-soft transition-all duration-500"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-secondary group-hover:bg-gradient-orange transition-all duration-500">
                <item.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
