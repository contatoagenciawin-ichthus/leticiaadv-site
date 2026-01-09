"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Shield, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-warm-cream via-background to-soft-beige">
      {/* blobs decorativos */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] bg-sage-green/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-[5%] w-[600px] h-[600px] bg-warm-terracotta/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 lg:space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 py-2.5 px-5 border border-sage-green/30 rounded-full text-sm font-medium text-deep-sage bg-white/80 backdrop-blur-sm shadow-sm"
            >
              <Heart className="w-4 h-4 text-warm-terracotta fill-warm-terracotta/20" />
              <span>Advocacia Previdenciária com Humanidade</span>
            </motion.div>

            <h1 className="font-serif text-rich-navy leading-tight text-balance">
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                Seus direitos
              </span>

              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-2">
                defendidos com{" "}
                <span className="relative inline-block text-sage-green">
                  cuidado
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-sage-green/30"
                    viewBox="0 0 300 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8C50 3 100 2 150 5C200 8 250 4 298 7"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>

              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-2">
                e estratégia.
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-warm-grey max-w-xl leading-relaxed font-light">
              Atendimento próximo, claro e responsável para orientar você
              em decisões importantes com segurança e respeito.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-sage-green text-white rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:bg-deep-sage transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  Agende uma Conversa
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-sage-green/30 rounded-xl font-semibold text-base text-deep-sage bg-white hover:bg-soft-beige hover:border-sage-green/50 transition-all duration-300"
              >
                Conheça Meu Trabalho
              </motion.button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6 text-sm text-warm-grey">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-sage-green/20 to-sage-green/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-sage-green" />
                </div>
                <span className="font-medium text-rich-navy">
                  Atendimento personalizado
                </span>
              </div>

              <div className="hidden sm:block w-px h-6 bg-border" />

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-warm-terracotta/20 to-warm-terracotta/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-warm-terracotta" />
                </div>
                <span className="font-medium text-rich-navy">
                  Orientação com segurança
                </span>
              </div>
            </div>
          </motion.div>

          {/* Coluna imagem */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:flex justify-center items-end h-[560px]"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-sage-green/10 via-transparent to-warm-terracotta/10 rounded-3xl blur-2xl" />

            <Image
              src="/images/leticia/dra2.png"
              alt="Dra. Letícia Marinho"
              width={420}
              height={560}
              priority
              className="relative z-10 drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
