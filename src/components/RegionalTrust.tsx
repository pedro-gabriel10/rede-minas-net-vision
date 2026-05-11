import { motion } from "framer-motion";
import { MapPin, Users, Headphones } from "lucide-react";

export function RegionalTrust() {
  return (
    <section className="relative py-24 bg-background">
      <div className="container mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-navy p-8 sm:p-14 border border-white/10 shadow-elegant"
        >
          <div className="absolute inset-0 grid-bg opacity-15" />
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[oklch(0.72_0.18_50)/0.18] blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.3em] text-[oklch(0.78_0.18_60)] uppercase mb-4">
                Confiança regional
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
                Empresa regional, atendimento próximo de você
              </h2>
              <p className="mt-5 text-base sm:text-lg text-white/75 max-w-xl">
                Atendemos Campo Belo, Santana do Jacaré, Candeias e zonas rurais,
                oferecendo suporte próximo e atendimento humanizado.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: MapPin, title: "Aqui na região", desc: "Equipe local, perto de você." },
                { icon: Users, title: "Atendimento humano", desc: "Sem URA, sem espera." },
                { icon: Headphones, title: "Suporte ágil", desc: "Resolvemos rápido pelo WhatsApp." },
              ].map((it) => (
                <div
                  key={it.title}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-orange mb-4">
                    <it.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-white font-semibold mb-1">{it.title}</div>
                  <div className="text-sm text-white/65 leading-relaxed">{it.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
