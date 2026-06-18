import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'
import { SectionBadge } from '../components/SectionBadge'
import { useGsapReveal } from '../hooks/useGsapReveal'

const projects = [
  {
    title: 'Obra nueva residencial',
    image:
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20modern%20residential%20new%20build%2C%20clean%20white%20architecture%2C%20premium%20finish%2C%20madrid%20spain%2C%20high%20end%20construction%20photography%2C%20no%20people&image_size=landscape_16_9',
  },
  {
    title: 'Reforma integral de vivienda',
    image:
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20premium%20home%20interior%20renovation%2C%20modern%20kitchen%20and%20living%20space%2C%20natural%20wood%2C%20white%20surfaces%2C%20architectural%20interior%20photography%2C%20no%20people&image_size=landscape_16_9',
  },
  {
    title: 'Rehabilitación de fachada',
    image:
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20facade%20rehabilitation%2C%20urban%20building%20in%20madrid%2C%20scaffolding%2C%20restoration%20work%2C%20premium%20documentary%20construction%20photography%2C%20no%20people&image_size=landscape_16_9',
  },
  {
    title: 'Reforma de baño y cocina',
    image:
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20modern%20bathroom%20renovation%2C%20premium%20stone%20tiles%2C%20clean%20lighting%2C%20architectural%20interior%20photography%2C%20no%20people&image_size=landscape_16_9',
  },
] as const

export function ProjectsGallery() {
  const scopeRef = useRef<HTMLElement | null>(null)

  useGsapReveal({
    scope: scopeRef,
    selector: '[data-project-reveal]',
    stagger: 0.09,
    y: 34,
    start: 'top 84%',
  })

  return (
    <section
      id="proyectos"
      ref={(n) => {
        scopeRef.current = n
      }}
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionBadge data-project-reveal>
              Proyectos realizados
            </SectionBadge>
            <h2
              data-project-reveal
              className="mt-5 font-display text-[28px] font-semibold tracking-tight text-ink-900 sm:text-[34px]"
            >
              Ideas que construyen realidades
            </h2>
          </div>
          <button
            type="button"
            data-project-reveal
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 text-[13px] font-semibold text-ink-900 shadow-[0_1px_0_rgba(16,24,40,0.05)] transition hover:bg-brand-light"
          >
            Ver todos los proyectos
          </button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <article
              key={p.title}
              data-project-reveal
              className="group relative overflow-hidden rounded-[22px] border border-black/10 bg-black shadow-[0_18px_40px_-34px_rgba(16,24,40,0.55)]"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-56 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-[14px] font-semibold text-white">
                  {p.title}
                </div>
                <button
                  type="button"
                  className="mt-3 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-[12px] font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-brand-green hover:ring-brand-green"
                >
                  Ver proyecto
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
