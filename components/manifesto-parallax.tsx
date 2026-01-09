"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  quote?: string;
  author?: string;
};

export function ManifestoParallax({
  quote = "Se você é alguém que busca uma vida digna, já compartilhamos a mesma luta.",
  author = "Letícia Marinho — Advocacia Previdenciária",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  // Parallax discreto: fundo move pouco, texto fica estável
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]); // bem suave

  return (
    <section
      ref={ref as any}
      className="relative isolate overflow-hidden"
      aria-label="Manifesto"
    >
      {/* Fundo azul marinho (tom do card) + textura leve */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 bg-[#0E2230]"
      >
        {/* gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-black/0 to-black/20" />
        {/* noise opcional (se você tiver util .bg-noise no globals) */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-noise" />
        {/* vinheta */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(255,255,255,0.10),transparent_60%)]" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-24 sm:py-28 lg:py-32">
        <div className="max-w-4xl">
          <p className="text-white/70 text-sm tracking-wide uppercase mb-6">
            Manifesto
          </p>

          <h2 className="font-serif text-balance text-3xl sm:text-4xl lg:text-5xl leading-tight text-white">
            “{quote}”
          </h2>

          <div className="mt-10 h-px w-24 bg-white/20" />

          <p className="mt-6 text-white/70 text-sm">
            {author}
          </p>
        </div>
      </div>
    </section>
  );
}
