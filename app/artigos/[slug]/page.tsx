// app/artigos/[slug]/page.tsx
import { articles } from "@/data/articles";
import { ArrowLeft, Calendar, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// ❌ NÃO use dynamicParams / force-static em dev com Turbopack
// export const dynamicParams = false;
// export const dynamic = "force-static";

type Props = {
  params: { slug: string };
};

export default function ArticlePage({ params }: Props) {
  const post = articles.find((a) => a.slug === params.slug);

  if (!post) notFound();

  const whatsappUrl =
    "https://wa.me/5583987524107?text=" +
    encodeURIComponent(`Li o artigo "${post.title}" e gostaria de tirar uma dúvida.`);

  return (
    <article className="min-h-screen bg-paper pb-24">
      <div className="container mx-auto px-6 pt-32 pb-8">
        <Link
          href="/#artigos"
          className="inline-flex items-center gap-2 text-ink/60 hover:text-sage transition-colors text-sm font-bold uppercase tracking-widest group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Voltar para artigos
        </Link>
      </div>

      <div className="container mx-auto px-6 max-w-3xl">
        <header className="mb-12 text-center space-y-6 border-b border-ink/10 pb-12">
          <div className="flex items-center justify-center gap-4 text-xs font-bold tracking-widest uppercase text-sage">
            <span className="bg-sage/10 px-3 py-1 rounded-full">{post.category}</span>
            <span className="flex items-center gap-1 text-ink/40">
              <Clock size={12} /> {post.readTime}
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1]">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-2 text-ink/40 text-sm font-medium">
            <Calendar size={14} />
            <span>Publicado em {post.date}</span>
          </div>
        </header>

        <div
          className="prose prose-lg prose-headings:font-serif prose-headings:text-ink prose-p:text-ink/80 prose-p:leading-relaxed prose-a:text-sage hover:prose-a:text-ink prose-strong:text-ink prose-blockquote:border-sage prose-blockquote:text-ink/60 prose-blockquote:font-serif prose-blockquote:italic mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-20 p-8 md:p-12 bg-ink rounded-3xl text-paper text-center relative overflow-hidden">
          <h3 className="font-serif text-3xl text-white mb-4">
            Precisa de orientação?
          </h3>
          <p className="text-paper/70 mb-8">
            Cada situação exige análise cuidadosa. Vamos conversar.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sage text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-ink transition"
          >
            <MessageCircle size={20} />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
