import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, terms, pillars }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 overflow-hidden">
      {subtitle && (
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl max-w-2xl mt-4 text-neutral-300 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}

      {terms && (
        <motion.div
          className="mt-6 flex flex-wrap gap-3 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {terms.map((t, i) => (
            <div key={i} className="bg-green-900/50 border border-green-700 rounded-xl px-4 py-3 flex-1 min-w-[200px]">
              <span className="text-amber-400 font-bold block text-sm">{t.word}</span>
              <span className="text-neutral-300 text-sm">{t.def}</span>
            </div>
          ))}
        </motion.div>
      )}

      {pillars && (
        <motion.div
          className="mt-6 flex flex-wrap gap-3 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {pillars.map((p, i) => (
            <div key={i} className="bg-green-900/50 border border-green-700 rounded-xl px-4 py-3 flex-1 min-w-[150px]">
              <span className="text-2xl block mb-1">{p.icon}</span>
              <span className="text-amber-400 font-bold block text-sm">{p.name}</span>
              <span className="text-neutral-300 text-xs">{p.def}</span>
            </div>
          ))}
        </motion.div>
      )}

      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-amber-400 bg-transparent border-amber-400 hover:bg-amber-400 hover:text-black transition-colors"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}
