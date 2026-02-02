"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { articles } from "@/data/articles";
import Link from "next/link";

export function ArticlesSection() {
  // 🔹 Ordena do mais recente para o mais antigo
  const sortedArticles = [...articles].sort((a, b) => {
    return b.id - a.id; // mantém simples e previsível
  });

  return (
    <section
      id="artigos"
      className="py-24 bg-paper relative border-t border-ink/5 scroll-mt-24"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sage font-medium tracking-widest text-xs uppercase">
              <BookOpen size={16} />
              <span>Biblioteca de Direitos</span>
            </div>

            <h2 className="font-serif text-4xl text-ink">
              Entenda o seu <span className="italic text-sage">momento</span>
            </h2>
          </div>

          <span className="text-sm text-ink/50">
            Artigos informativos
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sortedArticles.map((article, index) => (
            <Link
              href={`/artigos/${article.slug}`}
              key={article.id}
              className="block h-full"
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex flex-col h-full justify-between rounded-2xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-ink/40 uppercase border-b border-ink/10 pb-3">
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-ink group-hover:text-sage transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-ink/60 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-ink underline decoration-sage/30 underline-offset-4 group-hover:decoration-sage">
                    Ler artigo completo
                    <ArrowRight size={14} />
                  </span>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
