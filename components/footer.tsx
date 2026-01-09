"use client";
import { Instagram, Mail, MapPin, Phone, Heart } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappUrl =
    "https://wa.me/5583987524107?text=" +
    encodeURIComponent("Olá! Vim pelo site e gostaria de conversar sobre meu caso no INSS.");

  return (
    <footer className="relative overflow-hidden bg-rich-navy text-warm-cream py-16">
      {/* Fundo decorativo (bem sutil) */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] bg-sage-green/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-28 -left-28 w-[620px] h-[620px] bg-warm-terracotta/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* COLUNA 1: Logo e Sobre */}
          <div className="space-y-6">
            <div className="space-y-4">
              {/* Logo prata/transparente */}
              <div className="relative w-48 h-30">
                <Image
                  src="/images/logo.png"
                  alt="Logo Dra. Letícia Marinho"
                  fill
                  className="object-contain object-left"
                  priority={false}
                />
              </div>

              <div className="space-y-1">
                <p className="font-serif text-xl text-warm-cream">
                  Dra. Letícia Marinho
                </p>
                <p className="text-sm text-warm-cream/70 font-light">
                  Advocacia Previdenciária
                </p>
              </div>
            </div>

            <p className="text-warm-cream/70 leading-relaxed max-w-xs font-light">
              Um trabalho técnico, mas feito com humanidade — para transformar a burocracia em proteção real
              para você e sua família.
            </p>

            <div className="flex items-center gap-2 text-warm-cream/70 text-sm">
              <Heart className="w-4 h-4 text-warm-terracotta fill-warm-terracotta/30" />
              <span className="italic font-serif">Cuidando do que é essencial</span>
            </div>

            {/* Redes Sociais */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/adv.leticia.marinho/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sage-green/20 hover:border-sage-green/40 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* COLUNA 2: Contato */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg text-warm-cream mb-6 flex items-center gap-2">
              Entre em Contato
              <span className="h-px w-8 bg-sage-green/40 inline-block" />
            </h4>

            <div className="space-y-5 text-warm-cream/80 text-sm">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-warm-cream transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sage-green/15 group-hover:border-sage-green/40 transition-all">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs text-warm-cream/50 uppercase tracking-widest">
                    WhatsApp / Telefone
                  </p>
                  <p className="font-medium text-base">(83) 98752-4107</p>
                </div>
              </a>

              <a
                href="mailto:contato@leticiamarinhoadv.com.br"
                className="flex items-center gap-3 hover:text-warm-cream transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sage-green/15 group-hover:border-sage-green/40 transition-all">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs text-warm-cream/50 uppercase tracking-widest">
                    E-mail
                  </p>
                  <p className="font-medium">contato@leticiamarinhoadv.com.br</p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs text-warm-cream/50 uppercase tracking-widest mb-1">
                    Atuação
                  </p>
                  <p className="leading-relaxed font-medium">
                    Atendimento digital em <br />
                    <span className="text-sage-green">todo o Brasil</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUNA 3: Áreas */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg text-warm-cream mb-6 flex items-center gap-2">
              Áreas de Atuação
              <span className="h-px w-8 bg-warm-terracotta/40 inline-block" />
            </h4>

            <ul className="space-y-3 text-warm-cream/70 text-sm">
              {[
                "Aposentadorias",
                "Auxílio-Doença",
                "Aposentadoria por Invalidez",
                "BPC / LOAS",
                "Pensão por Morte",
                "Planejamento Previdenciário",
              ].map((area, index) => (
                <li key={index}>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-warm-terracotta/70" />
                    <span className="hover:text-warm-cream transition-colors">
                      {area}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            {/* Mini-observação (discreta) */}
            <p className="pt-4 text-xs text-warm-cream/45 leading-relaxed">
              Conteúdos informativos. Cada caso exige análise individual.
            </p>
          </div>
        </div>

        {/* Rodapé do Rodapé */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-warm-cream/50 font-light">
          <p>© {currentYear} Dra. Letícia Marinho. Todos os direitos reservados.</p>
          <p className="text-warm-cream/40">Advocacia Previdenciária • Atendimento digital</p>
        </div>
      </div>
    </footer>
  );
}
