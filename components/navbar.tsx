"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function Navbar() {
  const whatsappUrl =
    "https://wa.me/5583987524107?text=" +
    encodeURIComponent("Olá! Vim pelo site e gostaria de conversar sobre meu caso no INSS.");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b border-ink/5 h-20 flex items-center">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Nome */}
        <Link href="/" className="font-serif text-xl tracking-wide text-ink">
          Dra. Letícia <span className="text-sage italic">Marinho</span>
        </Link>

        {/* Links (âncoras na HOME) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-ink/60 uppercase tracking-widest">
          <Link href="/#sobre" className="hover:text-sage transition-colors">
            Sobre
          </Link>
          <Link href="/#atuacao" className="hover:text-sage transition-colors">
            Atuação
          </Link>
          <Link href="/#artigos" className="hover:text-sage transition-colors">
            Artigos
          </Link>
        </div>

        {/* Botão WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="flex items-center gap-2 px-5 py-2 border border-sage/30 rounded-full text-xs font-bold uppercase text-sage hover:bg-sage hover:text-white transition-all duration-300"
        >
          <MessageCircle size={16} />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
