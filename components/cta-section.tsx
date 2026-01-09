"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER_E164 = "5583987524107"; // +55 83 98752-4107
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(
  "Olá, Dra. Letícia! Vim pelo site e gostaria de tirar uma dúvida sobre INSS."
)}`;

export function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      {/* fundo azul marinho com leve textura */}
      <div className="absolute inset-0 bg-[#0E2230]" />
      <div className="absolute inset-0 opacity-25 bg-noise mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,rgba(255,255,255,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-white/70 text-sm uppercase tracking-wide mb-4">
            Vamos conversar
          </p>

          <h2 className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
            Não precisa enfrentar a burocracia sozinha.
          </h2>

          <p className="mt-5 text-white/75 text-base sm:text-lg leading-relaxed">
            Se você está em dúvida sobre <span className="text-white">aposentadoria</span>,{" "}
            <span className="text-white">benefícios</span>, <span className="text-white">BPC/LOAS</span>{" "}
            ou passou por uma negativa do INSS, me conte seu caso.
            Eu vou te orientar com clareza e respeito, no seu tempo.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-[#0E2230] font-semibold shadow-lg hover:shadow-xl transition"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
              <ArrowRight className="w-5 h-5 opacity-70" />
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#artigos"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-4 text-white font-semibold hover:bg-white/10 transition"
            >
              Ver conteúdos
            </motion.a>
          </div>

          <p className="mt-6 text-white/55 text-sm">
            Atendimento mediante análise do caso. Este site tem caráter informativo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
