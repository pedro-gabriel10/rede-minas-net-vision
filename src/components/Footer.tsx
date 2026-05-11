import { Instagram, MapPin, Phone, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { WHATSAPP_LINK } from "./WhatsappFloat";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.12_0.05_258)] text-white/80">
      <div className="container mx-auto px-5 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Rede Minas Net" className="h-14 w-14 object-contain" />
              <div>
                <div className="font-display font-bold text-white text-lg tracking-wide">REDE MINAS</div>
                <div className="text-[oklch(0.78_0.18_60)] text-xs font-semibold tracking-[0.3em]">N E T</div>
              </div>
            </div>
            <p className="text-sm text-white/60 max-w-md leading-relaxed">
              Provedora de internet fibra óptica em Campo Belo, Santana do Jacaré, Candeias
              e zonas rurais. Conexão estável, atendimento humano.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[oklch(0.78_0.18_60)]" />
                <a href="https://wa.me/5535998252502" className="hover:text-white transition-colors">
                  (35) 99825-2502
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="h-4 w-4 text-[oklch(0.78_0.18_60)]" />
                <a href="https://instagram.com/redeminastelecom" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @redeminastelecom
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Cobertura</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" />Campo Belo / MG</li>
              <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" />Santana do Jacaré / MG</li>
              <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" />Candeias / MG</li>
              <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" />Zonas Rurais</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Rede Minas Net. Todos os direitos reservados.</p>
          <p className="text-xs text-white/40">Internet fibra óptica em Minas Gerais</p>
        </div>
      </div>
    </footer>
  );
}
