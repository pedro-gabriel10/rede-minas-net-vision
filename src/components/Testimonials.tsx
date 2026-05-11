import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  { name: "João", city: "Campo Belo / MG", text: "Depois que troquei para a Rede Minas Net, nunca mais tive dor de cabeça com internet." },
  { name: "Maria", city: "Santana do Jacaré / MG", text: "Atendimento rápido e internet muito estável. Recomendo de olhos fechados." },
  { name: "Carlos", city: "Candeias / MG", text: "Finalmente uma internet que funciona bem aqui na região." },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-28 bg-secondary/40">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-[oklch(0.72_0.18_50)] uppercase mb-4">
            Quem usa, recomenda
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary text-balance">
            Histórias reais de quem trocou.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative rounded-3xl bg-card border border-border p-8 shadow-soft hover:-translate-y-1 transition-transform duration-500"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-[oklch(0.72_0.18_50)/0.15]" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-[oklch(0.72_0.18_50)] text-[oklch(0.72_0.18_50)]" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed mb-7">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-navy text-white font-semibold">
                  {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.city}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
