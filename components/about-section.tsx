"use client"
import { motion } from "framer-motion"
import { Heart, Shield, Scale, Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-soft-coral/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-sage-green/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-20 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-2 px-4 bg-soft-beige/50 rounded-full border border-sage-green/20 text-sm font-medium text-deep-sage mb-6"
          >
            <Sparkles className="w-4 h-4 text-warm-terracotta" />
            <span>Minha Filosofia</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-rich-navy leading-snug text-balance"
          >
            Mais do que processos, <br />
            trabalho com{" "}
            <span className="relative inline-block text-sage-green">
              histórias de vida
              <svg
                className="absolute -bottom-1 left-0 w-full h-2 text-sage-green/30"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 8C50 3 100 2 150 5C200 8 250 4 298 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 max-w-3xl mx-auto text-warm-grey leading-relaxed text-lg"
          >
            <p>
              Em um sistema que muitas vezes transforma pessoas em números, escolhi seguir um caminho diferente.
              Acredito que cada segurado possui uma trajetória única que merece ser ouvida, compreendida e defendida com
              dedicação.
            </p>
            <p>
              É preciso sensibilidade para entender o que não está escrito nos documentos e expertise técnica para
              transformar sua história em direitos conquistados.
            </p>
            <div className="mt-10 p-8 bg-gradient-to-br from-soft-beige/50 to-warm-cream/50 rounded-2xl border-l-4 border-sage-green shadow-sm">
              <Heart className="w-8 h-8 text-warm-terracotta mb-4 mx-auto" />
              <p className="font-serif text-xl lg:text-2xl text-rich-navy italic text-center leading-relaxed text-balance">
                "Sou a voz que transforma a burocracia fria em justiça humana e acessível."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 border-t border-sage-green/10 pt-16">
          {[
            {
              icon: Heart,
              title: "Atendimento Artesanal",
              desc: "Cada caso é tratado pessoalmente, com o tempo e atenção que sua história merece.",
              color: "from-warm-terracotta/20 to-soft-coral/20",
              iconColor: "text-warm-terracotta",
            },
            {
              icon: Shield,
              title: "Técnica Especializada",
              desc: "Anos de experiência revertendo negativas e conquistando os melhores benefícios possíveis.",
              color: "from-sage-green/20 to-deep-sage/20",
              iconColor: "text-sage-green",
            },
            {
              icon: Scale,
              title: "Justiça Integral",
              desc: "Buscamos não apenas o benefício, mas o valor justo que reflete toda sua contribuição.",
              color: "from-deep-sage/20 to-sage-green/20",
              iconColor: "text-deep-sage",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="text-center space-y-4 hover:bg-gradient-to-b hover:from-soft-beige/30 hover:to-transparent p-8 rounded-2xl transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className={`w-8 h-8 ${item.iconColor}`} />
              </div>
              <h3 className="font-serif text-xl font-bold text-rich-navy">{item.title}</h3>
              <p className="text-warm-grey leading-relaxed text-pretty">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
