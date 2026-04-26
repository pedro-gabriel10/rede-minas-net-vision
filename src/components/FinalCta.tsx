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
          <h2 className="text-5xl lg:text-7xl font-bold text-white text-balance leading-tight">
            Pare de sofrer com{" "}
            <span className="bg-gradient-to-r from-[oklch(0.78_0.18_60)] to-[oklch(0.85_0.15_70)] bg-clip-text text-transparent">
              internet instável.
            </span>
          </h2>
          <p className="mt-7 text-lg lg:text-xl text-white/75 max-w-2xl mx-auto text-balance">
            Consulte disponibilidade para sua rua agora mesmo e veja como a internet pode ser simples.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-orange px-9 py-5 text-lg font-semibold text-white shadow-orange hover:shadow-elegant hover:scale-[1.03] transition-all"
          >
            Falar com atendente agora
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-6 text-sm text-white/50">Resposta em minutos · (35) 99825-2502</p>
        </motion.div>
      </div>
    </section>
  );
}
