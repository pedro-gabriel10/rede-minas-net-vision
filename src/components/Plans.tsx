import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "./WhatsappFloat";

const plans = [
  { mega: "350", desc: "Ideal para casas conectadas.", features: ["Wi-Fi de alta performance", "Suporte rápido", "Sem fidelidade abusiva"] },
  { mega: "450", desc: "Mais estabilidade para toda família.", features: ["Wi-Fi dual band", "Streaming 4K", "Suporte ágil"] },
  { mega: "620", desc: "Excelente desempenho para streaming.", features: ["Wi-Fi 6 disponível", "Smart home pronta", "Latência baixa"], highlight: true },
  { mega: "750", desc: "Alta performance para muitos dispositivos.", features: ["Latência mínima", "Upload turbinado", "Estabilidade 24/7"] },
  { mega: "900", desc: "Máximo desempenho.", features: ["Máxima velocidade", "Prioridade no suporte", "Roteador premium"] },
];

export function Plans() {
  return (
    <section id="planos" className="relative py-28 bg-secondary/40">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-[oklch(0.72_0.18_50)] uppercase mb-4">
            Planos
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary text-balance">
            Velocidade pra cada estilo de vida.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Escolha o plano ideal e fale com a gente. Consultamos a disponibilidade
            para a sua rua na hora.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.mega}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative flex flex-col rounded-3xl p-6 transition-all duration-500 ${
                plan.highlight
                  ? "bg-gradient-navy text-white shadow-elegant lg:-translate-y-4 border border-[oklch(0.72_0.18_50)/0.4]"
                  : "bg-card border border-border hover:shadow-soft hover:-translate-y-1"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-orange">
                    <Sparkles className="h-3 w-3" />
                    Mais contratado
                  </div>
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-bold font-display ${plan.highlight ? "text-white" : "text-primary"}`}>
                    {plan.mega}
                  </span>
                  <span className={`text-lg font-semibold ${plan.highlight ? "text-[oklch(0.78_0.18_60)]" : "text-muted-foreground"}`}>
                    MEGA
                  </span>
                </div>
                <p className={`mt-3 text-sm leading-relaxed ${plan.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${plan.highlight ? "text-[oklch(0.78_0.18_60)]" : "text-[oklch(0.55_0.16_250)]"}`} />
                    <span className={plan.highlight ? "text-white/85" : "text-foreground/80"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-all ${
                  plan.highlight
                    ? "bg-gradient-orange text-white shadow-orange hover:scale-[1.03]"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Consultar disponibilidade para sua rua
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
