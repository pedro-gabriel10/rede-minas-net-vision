import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5535998252502?text=Ol%C3%A1!%20Quero%20consultar%20disponibilidade%20da%20Rede%20Minas%20Net%20na%20minha%20rua.";

export function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[oklch(0.72_0.18_145)] animate-ping opacity-30" />
      <span className="relative flex items-center gap-3 rounded-full bg-[oklch(0.62_0.19_145)] px-5 py-4 text-white font-semibold shadow-elegant transition-transform duration-300 group-hover:scale-105">
        <MessageCircle className="h-6 w-6" strokeWidth={2.4} />
        <span className="hidden sm:inline">(35) 99825-2502</span>
      </span>
    </a>
  );
}

export const WHATSAPP_LINK = WHATSAPP_URL;
