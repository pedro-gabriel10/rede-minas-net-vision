import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import coverageImg from "@/assets/coverage.jpg";

const cities = [
  { name: "Campo Belo", state: "MG" },
  { name: "Santana do Jacaré", state: "MG" },
  { name: "Candeias", state: "MG" },
  { name: "Zonas Rurais", state: "Atendimento ampliado" },
];

export function Coverage() {
  return (
    <section id="cobertura" className="relative py-28 bg-gradient-navy overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[oklch(0.72_0.18_50)/0.15] blur-3xl" />

      <div className="container mx-auto px-5 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.3em] text-[oklch(0.78_0.18_60)] uppercase mb-4">
              Cobertura
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-white text-balance leading-tight">
              Atendendo sua região com qualidade e proximidade.
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-lg">
              Somos uma empresa daqui, atendendo de perto cada cliente, com infraestrutura
              robusta e equipe técnica local.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {cities.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3.5 hover:border-[oklch(0.72_0.18_50)/0.5] hover:bg-white/10 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-orange shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold leading-tight">{c.name}</div>
                    <div className="text-xs text-white/60">{c.state}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-white/10">
              <img
                src={coverageImg}
                alt="Região de cobertura Rede Minas Net"
                width={1600}
                height={1000}
                loading="lazy"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.06_258)] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4">
                <div className="h-3 w-3 rounded-full bg-[oklch(0.72_0.18_145)] animate-pulse" />
                <span className="text-white font-medium text-sm">Sinal estável em toda a região</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
