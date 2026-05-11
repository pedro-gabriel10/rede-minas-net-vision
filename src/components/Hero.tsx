import { motion } from "framer-motion";
import { ArrowRight, Wifi, Zap } from "lucide-react";
import heroImg from "@/assets/hero-fiber.jpg";
import { WHATSAPP_LINK } from "./WhatsappFloat";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1280}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.16_0.06_258)]/70 via-[oklch(0.16_0.06_258)]/60 to-[oklch(0.16_0.06_258)]" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-glow" />
      </div>

      <div className="container mx-auto px-5 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] sm:text-xs font-medium text-white/75 mb-5"
          >
            {["Atendimento regional", "Internet fibra estável", "Suporte rápido via WhatsApp"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <span className="text-[oklch(0.78_0.18_60)]">✔</span>
                <span>{t}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-medium text-white/90 mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-[oklch(0.72_0.18_145)] animate-pulse" />
            Provedora de Fibra Óptica em Minas Gerais
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white text-balance leading-[1.05]"
          >
            Internet{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[oklch(0.78_0.18_60)] to-[oklch(0.85_0.15_70)] bg-clip-text text-transparent">
                Fibra
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                <path d="M2 9 Q 75 2, 150 6 T 298 4" stroke="oklch(0.72 0.18 50)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>{" "}
            em Campo Belo, Santana do Jacaré, Candeias e Região
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl text-balance"
          >
            Conexão rápida, estável e atendimento rápido via WhatsApp. Consulte
            disponibilidade para sua rua.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-5 text-white/90 text-sm sm:text-base"
          >
            {["Alta velocidade real", "Atendimento rápido via WhatsApp", "Cobertura regional"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[oklch(0.72_0.18_50)] text-white text-xs font-bold">✓</span>
                <span className="font-medium">{t}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-orange px-8 py-5 text-base sm:text-lg font-bold text-white shadow-orange hover:shadow-elegant hover:scale-[1.03] transition-all"
            >
              Consultar disponibilidade da minha rua
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-7 py-5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Falar no WhatsApp
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-5 text-sm text-white/65"
          >
            Empresa regional, atendimento próximo de você
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl"
          >
            {[
              { icon: Zap, label: "Alta velocidade real" },
              { icon: Wifi, label: "Fibra ponta a ponta" },
              { icon: ArrowRight, label: "Atendimento ágil", className: "hidden md:flex" },
            ].map((f, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 text-white/85 ${f.className ?? ""}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/15">
                  <f.icon className="h-5 w-5 text-[oklch(0.78_0.18_60)]" />
                </div>
                <span className="text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="h-12 w-7 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-white/70"
          />
        </div>
      </div>
    </section>
  );
}
