"use client"
import { motion } from "framer-motion"
import { Heart, Shield, HandHeart, Sparkles } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Quando o corpo pede pausa",
    category: "Auxílio-Doença e Aposentadoria por Invalidez",
    desc: "Seu corpo merece descanso. Lutamos para que você tenha o amparo necessário nos momentos em que a saúde exige uma pausa.",
    color: "from-warm-terracotta/20 to-soft-coral/20",
    iconColor: "text-warm-terracotta",
  },
  {
    icon: Sparkles,
    title: "O tempo de colher",
    category: "Planejamento e Aposentadorias",
    desc: "Décadas de trabalho merecem ser recompensadas. Planejamos cada detalhe para garantir o melhor benefício para você.",
    color: "from-sage-green/20 to-deep-sage/20",
    iconColor: "text-sage-green",
  },
  {
    icon: Shield,
    title: "Dignidade não é favor",
    category: "BPC / LOAS",
    desc: "Toda pessoa merece viver com dignidade. Garantimos o amparo constitucional para quem mais precisa.",
    color: "from-soft-coral/20 to-warm-terracotta/20",
    iconColor: "text-soft-coral",
  },
  {
    icon: HandHeart,
    title: "Proteção para quem fica",
    category: "Pensão por Morte",
    desc: "Em momentos de perda, sua família precisa de segurança. Agimos com rapidez e sensibilidade para garantir o amparo necessário.",
    color: "from-deep-sage/20 to-sage-green/20",
    iconColor: "text-deep-sage",
  },
]

export function ServicesSection() {
  return (
    <section
      id="atuacao"
      className="py-24 px-6 bg-gradient-to-b from-background to-soft-beige relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm-terracotta/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-2 px-4 bg-white/80 rounded-full border border-sage-green/30 text-sm font-medium text-deep-sage mb-4"
          >
            <Heart className="w-4 h-4 text-warm-terracotta fill-warm-terracotta/20" />
            <span>Áreas de Atuação</span>
          </motion.div>

          <h2 className="font-serif text-4xl lg:text-5xl text-rich-navy mb-4 text-balance">
            Como posso <span className="text-sage-green">cuidar</span> de você
          </h2>
          <p className="text-lg text-warm-grey max-w-2xl mx-auto leading-relaxed">
            Cada área do direito previdenciário tratada com a atenção e o carinho que você merece
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative bg-white/80 backdrop-blur-sm border border-sage-green/20 p-8 lg:p-10 rounded-2xl hover:shadow-2xl hover:shadow-sage-green/10 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              <span className="text-xs font-bold tracking-wider text-sage-green uppercase mb-3 block">
                {service.category}
              </span>

              <h3 className="font-serif text-2xl lg:text-3xl text-rich-navy mb-4 group-hover:text-sage-green transition-colors duration-300 text-balance">
                {service.title}
              </h3>

              <p className="text-warm-grey leading-relaxed text-pretty">
                {service.desc}
              </p>

              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-sage-green/20 rounded-br-xl group-hover:border-sage-green/40 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
