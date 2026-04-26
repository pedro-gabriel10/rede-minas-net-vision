import { motion } from "framer-motion";
import { MessageCircle, Search, Calendar } from "lucide-react";

const steps = [
  { n: "01", icon: MessageCircle, title: "Chame no WhatsApp", desc: "Toque no botão e fale com nossa equipe em segundos." },
  { n: "02", icon: Search, title: "Consulte sua rua", desc: "Verificamos a disponibilidade e o melhor plano pra você." },
  { n: "03", icon: Calendar, title: "Agende sua instalação", desc: "Equipe técnica vai até você, no dia e horário que combinar." },
];

export function HowItWorks() {
  return (
    <section className="relative py-28 bg-background">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-[oklch(0.72_0.18_50)] uppercase mb-4">
            Como funciona
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary text-balance">
            Em 3 passos você está conectado.
          </h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.18_50)/0.5] to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-navy text-white shadow-elegant">
                <s.icon className="h-10 w-10" />
                <span className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-orange text-white text-xs font-bold shadow-orange">
                  {s.n}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-3">{s.title}</h3>
              <p className="text-muted-foreground max-w-xs mx-auto leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
