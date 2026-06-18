import { Droplets, Flame, Home, Layers } from 'lucide-react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGsapReveal } from '../hooks/useGsapReveal'

type ServicesProps = {
  onNavigate: (target: string) => void
}

const serviceImages = {
  inundaciones:
    'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20flooded%20modern%20living%20room%2C%20water%20damage%20repair%2C%20clean%20architectural%20interior%2C%20natural%20light%2C%20premium%20photography%2C%20no%20people%2C%20high%20detail&image_size=landscape_4_3',
  incendios:
    'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20fire%20damage%20interior%20rehabilitation%2C%20charred%20walls%20being%20restored%2C%20construction%20cleanup%2C%20professional%20renovation%2C%20premium%20documentary%20photography%2C%20no%20people&image_size=landscape_4_3',
  sate: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20building%20facade%20insulation%20system%2C%20scaffolding%2C%20external%20thermal%20insulation%2C%20clean%20construction%20site%2C%20premium%20architectural%20photography%2C%20no%20people&image_size=landscape_4_3',
  reformas:
    'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20modern%20home%20renovation%2C%20high%20end%20construction%20finish%2C%20clean%20white%20walls%2C%20natural%20wood%2C%20premium%20interior%20photography%2C%20no%20people&image_size=landscape_4_3',
} as const

export function Services({ onNavigate }: ServicesProps) {
  const scopeRef = useRef<HTMLElement | null>(null)
  const navigate = useNavigate()

  useGsapReveal({
    scope: scopeRef,
    selector: '[data-service-card]',
    stagger: 0.12,
    y: 60,
    start: 'top 78%',
  })

  return (
    <section
      id="servicios"
      ref={(n) => {
        scopeRef.current = n
      }}
      className="relative z-20 -mt-[86px] bg-transparent pb-14"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-[28px] border border-black/5 bg-white/80 p-6 shadow-soft backdrop-blur sm:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-[26px] font-semibold tracking-tight text-ink-900 sm:text-[32px]">
                Servicios principales
              </h2>
              <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-ink-600 sm:text-[15px]">
                Soluciones integrales para viviendas, comunidades, locales y
                edificios.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('#contacto')}
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 text-[13px] font-semibold text-ink-900 shadow-[0_1px_0_rgba(16,24,40,0.05)] transition hover:bg-brand-light"
            >
              Presupuesto gratuito
            </button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <article
              data-service-card
              className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_24px_-20px_rgba(16,24,40,0.35)] transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative">
                <img
                  src={serviceImages.inundaciones}
                  alt="Reparación de siniestros por inundaciones en vivienda"
                  className="h-36 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/92 ring-1 ring-black/10 backdrop-blur">
                  <Droplets className="h-5 w-5 text-brand-green" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-semibold text-ink-900">
                  Siniestros por inundaciones
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-600">
                  Actuación rápida para minimizar daños, reparar espacios
                  afectados y recuperar tu propiedad.
                </p>
                <button
                  type="button"
                  onClick={() => navigate('/servicios/inundaciones')}
                  className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-brand-green"
                >
                  Ver servicio
                  <span className="transition group-hover:translate-x-1">→</span>
                </button>
              </div>
            </article>

            <article
              data-service-card
              className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_24px_-20px_rgba(16,24,40,0.35)] transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative">
                <img
                  src={serviceImages.incendios}
                  alt="Rehabilitación tras siniestros por incendios"
                  className="h-36 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/92 ring-1 ring-black/10 backdrop-blur">
                  <Flame className="h-5 w-5 text-brand-green" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-semibold text-ink-900">
                  Siniestros por incendios
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-600">
                  Rehabilitación integral tras incendios, saneamiento, reparación
                  y reconstrucción.
                </p>
                <button
                  type="button"
                  onClick={() => navigate('/servicios/incendios')}
                  className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-brand-green"
                >
                  Ver servicio
                  <span className="transition group-hover:translate-x-1">→</span>
                </button>
              </div>
            </article>

            <article
              data-service-card
              className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_24px_-20px_rgba(16,24,40,0.35)] transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative">
                <img
                  src={serviceImages.sate}
                  alt="Sistemas SATE para aislamiento térmico exterior"
                  className="h-36 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/92 ring-1 ring-black/10 backdrop-blur">
                  <Layers className="h-5 w-5 text-brand-green" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-semibold text-ink-900">
                  Especialistas en SATE
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-600">
                  Sistemas de Aislamiento Térmico por el Exterior para mejorar
                  eficiencia energética, confort y ahorro.
                </p>
                <button
                  type="button"
                  onClick={() => navigate('/servicios/sate')}
                  className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-brand-green"
                >
                  Ver servicio
                  <span className="transition group-hover:translate-x-1">→</span>
                </button>
              </div>
            </article>

            <article
              data-service-card
              className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_24px_-20px_rgba(16,24,40,0.35)] transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative">
                <img
                  src={serviceImages.reformas}
                  alt="Obra nueva y reformas integrales con acabados premium"
                  className="h-36 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/92 ring-1 ring-black/10 backdrop-blur">
                  <Home className="h-5 w-5 text-brand-green" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-semibold text-ink-900">
                  Obra nueva y reformas
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-600">
                  Construcción, reformas integrales y renovación de viviendas,
                  locales y edificios.
                </p>
                <button
                  type="button"
                  onClick={() => navigate('/servicios/reformas')}
                  className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-brand-green"
                >
                  Ver servicio
                  <span className="transition group-hover:translate-x-1">→</span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
