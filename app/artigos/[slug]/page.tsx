// app/artigos/[slug]/page.tsx
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MessageCircle } from "lucide-react"

import { articles, getArticleBySlug } from "@/data/articles"

// ✅ trava como estático (Vercel/Next não inventa runtime diferente)
export const dynamic = "force-static"
export const dynamicParams = false

export async function generateStaticParams() {
  return articles.map((post) => ({
    slug: post.slug,
  }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: Props) {
  // ✅ Await params antes de usar
  const { slug } = await params
  const post = getArticleBySlug(slug)

  if (!post) {
    return (
      <main className="min-h-screen bg-paper">
        <div className="container mx-auto px-6 pt-32 pb-16 max-w-3xl">
          <Link
            href="/#artigos"
            className="inline-flex items-center gap-2 text-ink/60 hover:text-sage transition-colors text-sm font-bold uppercase tracking-widest group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Voltar para artigos
          </Link>

          <div className="mt-10 p-10 bg-white/80 border border-ink/10 rounded-3xl">
            <h1 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
              Artigo indisponível
            </h1>
            <p className="mt-4 text-ink/70 leading-relaxed">
              Este artigo não foi encontrado. Volte para a lista de artigos.
            </p>
          </div>
        </div>
      </main>
    )
  }

  const whatsappUrl =
    "https://wa.me/5583987524107?text=" +
    encodeURIComponent(`Li o artigo "${post.title}" e gostaria de tirar uma dúvida.`)

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
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />

        <div className="mt-20 p-8 md:p-12 bg-ink rounded-3xl text-paper text-center relative overflow-hidden group">
          <div className="relative z-10 space-y-6">
            <h3 className="font-serif text-3xl text-white">Quer que eu olhe o seu caso?</h3>
            <p className="text-paper/70 font-light text-lg max-w-lg mx-auto">
              Me conte, em poucas linhas, o que aconteceu. Eu te respondo com o caminho mais seguro.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sage text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-ink transition-all duration-300 shadow-lg shadow-sage/20"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-sage/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-sage/30 transition-all duration-700" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-clay/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none group-hover:bg-clay/30 transition-all duration-700" />
        </div>
      </div>
    </article>
  )
}