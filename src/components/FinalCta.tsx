import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "./WhatsappFloat";

export function FinalCta() {
  return (
    <section className="relative py-28 bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[oklch(0.72_0.18_50)/0.25] blur-3xl" />

      <div className="container mx-auto px-5 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white text-balance leading-tight">
            Pare de sofrer com{" "}
            <span className="bg-gradient-to-r from-[oklch(0.78_0.18_60)] to-[oklch(0.85_0.15_70)] bg-clip-text text-transparent">
              internet lenta.
            </span>
          </h2>
          <p className="mt-6 sm:mt-7 text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto text-balance">
            Verifique agora mesmo a disponibilidade para sua rua.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-orange px-8 sm:px-10 py-5 sm:py-6 text-lg sm:text-xl font-bold text-white shadow-orange hover:shadow-elegant hover:scale-[1.03] transition-all"
          >
            Falar com um atendente
            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-6 text-sm text-white/60">Atendimento rápido pelo WhatsApp · (35) 99825-2502</p>
          <p className="mt-2 text-xs text-white/40">Cobertura sujeita à disponibilidade da região</p>
        </motion.div>
      </div>
    </section>
  );
}
