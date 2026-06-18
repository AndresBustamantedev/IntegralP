import { Clock3, MapPin, ShieldCheck, Users } from 'lucide-react'
import { useRef } from 'react'
import { useGsapReveal } from '../hooks/useGsapReveal'

const items = [
  {
    title: 'Profesionales cualificados',
    description:
      'Equipo técnico con experiencia en construcción, rehabilitación y reformas.',
    icon: Users,
  },
  {
    title: 'Calidad y garantía',
    description:
      'Materiales adecuados, acabados cuidados y garantía en nuestros trabajos.',
    icon: ShieldCheck,
  },
  {
    title: 'Cumplimos plazos',
    description: 'Planificación rigurosa y compromiso con los tiempos acordados.',
    icon: Clock3,
  },
  {
    title: 'Empresa local en Madrid',
    description:
      'Conocemos Madrid y ofrecemos una atención cercana y personalizada.',
    icon: MapPin,
  },
] as const

export function Benefits() {
  const scopeRef = useRef<HTMLElement | null>(null)

  useGsapReveal({
    scope: scopeRef,
    selector: '[data-benefit]',
    stagger: 0.1,
    y: 38,
    start: 'top 84%',
  })

  return (
    <section
      id="beneficios"
      ref={(n) => {
        scopeRef.current = n
      }}
      className="bg-brand-light py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-brand-dark ring-1 ring-black/5">
              <span className="h-2 w-2 rounded-full bg-brand-green" />
              ¿Por qué elegirnos?
            </div>
            <h2 className="mt-5 font-display text-[28px] font-semibold tracking-tight text-ink-900 sm:text-[34px]">
              Tu proyecto, nuestra prioridad
            </h2>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-ink-600 sm:text-[15px]">
              En IntegralProyect trabajamos con un objetivo claro: ofrecer
              soluciones integrales con la máxima calidad, cumpliendo plazos y
              cuidando cada detalle.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it) => {
              const Icon = it.icon
              return (
                <article
                  key={it.title}
                  data-benefit
                  className="rounded-[22px] border border-black/10 bg-white p-5 shadow-[0_18px_40px_-32px_rgba(16,24,40,0.45)] transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft ring-1 ring-black/5">
                      <Icon className="h-5 w-5 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-ink-900">
                        {it.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-ink-600">
                        {it.description}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

