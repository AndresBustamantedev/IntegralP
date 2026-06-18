import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowRight, Phone } from 'lucide-react'
import { useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type HeroProps = {
  onNavigate: (target: string) => void
}

const heroImage =
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20modern%20luxury%20villa%20exterior%2C%20madrid%20spain%2C%20clean%20white%20architecture%2C%20large%20glass%20windows%2C%20warm%20natural%20sunlight%2C%20premium%20real%20estate%20photography%2C%20ultra%20realistic%2C%20sharp%20detail%2C%20natural%20colors%2C%20no%20people%2C%20high%20end%20construction%20finish&image_size=landscape_16_9'

export function Hero({ onNavigate }: HeroProps) {
  const reducedMotion = usePrefersReducedMotion()
  const rootRef = useRef<HTMLElement | null>(null)

  useGSAP(
    () => {
      if (reducedMotion) return

      gsap.fromTo(
        '[data-hero-line]',
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.95,
          ease: 'power3.out',
          stagger: 0.12,
          delay: 0.05,
        },
      )

      gsap.fromTo(
        '[data-hero-fade]',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', delay: 0.25 },
      )
    },
    { scope: rootRef },
  )

  return (
    <section
      id="inicio"
      ref={(n) => {
        rootRef.current = n
      }}
      className="relative overflow-hidden bg-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-35%] h-[520px] w-[520px] rounded-full bg-brand-soft blur-[70px]" />
        <div className="absolute right-[-15%] top-[-30%] h-[540px] w-[540px] rounded-full bg-[#DFF0E4] blur-[80px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-12 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="relative z-10">
            <div className="relative z-20 inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 text-[12px] font-semibold text-brand-dark shadow-soft ring-1 ring-black/5">
              <span className="h-2 w-2 rounded-full bg-brand-green" />
              Construcción y rehabilitación en Madrid
            </div>

            <h1 className="mt-6 font-display text-[44px] font-semibold leading-[1.05] tracking-tighter2 text-ink-900 sm:text-[56px]">
              <span data-hero-line className="block">
                Construimos soluciones.
              </span>
              <span data-hero-line className="block text-brand-green">
                Creamos futuro.
              </span>
            </h1>

            <p
              data-hero-fade
              className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-600 sm:text-[16px]"
            >
              Empresa de construcción en Madrid especializada en siniestros,
              rehabilitación, SATE, obra nueva y reformas integrales.
            </p>

            <div
              data-hero-fade
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <button
                type="button"
                onClick={() => onNavigate('#servicios')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-5 py-3 text-[14px] font-semibold text-white shadow-soft transition hover:translate-y-[-1px] hover:bg-[#19662B] active:translate-y-0"
              >
                Nuestros servicios
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('#contacto')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-3 text-[14px] font-semibold text-ink-900 shadow-[0_1px_0_rgba(16,24,40,0.05)] transition hover:translate-y-[-1px] hover:bg-brand-light active:translate-y-0"
              >
                <Phone className="h-4 w-4 text-brand-green" aria-hidden="true" />
                Solicitar presupuesto
              </button>
            </div>

            <div
              data-hero-fade
              className="mt-8 flex flex-wrap items-center gap-3 text-[12px] font-semibold text-ink-600"
            >
              <span className="rounded-full bg-black/5 px-3 py-2">
                Calidad y garantía
              </span>
              <span className="rounded-full bg-black/5 px-3 py-2">
                Cumplimiento de plazos
              </span>
              <span className="rounded-full bg-black/5 px-3 py-2">
                Equipo técnico propio
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-brand-soft via-white to-white" />
            <div className="overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-card">
              <img
                src={heroImage}
                alt="Vivienda moderna construida con acabados premium en Madrid"
                className="h-[360px] w-full object-cover sm:h-[420px]"
                fetchPriority="high"
                decoding="async"
              />
              <div className="grid grid-cols-3 gap-3 border-t border-black/5 bg-white px-5 py-4">
                <div className="rounded-xl bg-brand-light px-4 py-3">
                  <div className="text-[12px] font-semibold text-ink-600">
                    Experiencia
                  </div>
                  <div className="mt-1 text-[15px] font-semibold text-ink-900">
                    Proyectos integrales
                  </div>
                </div>
                <div className="rounded-xl bg-brand-light px-4 py-3">
                  <div className="text-[12px] font-semibold text-ink-600">
                    Especialidad
                  </div>
                  <div className="mt-1 text-[15px] font-semibold text-ink-900">
                    SATE y siniestros
                  </div>
                </div>
                <div className="rounded-xl bg-brand-light px-4 py-3">
                  <div className="text-[12px] font-semibold text-ink-600">
                    Atención
                  </div>
                  <div className="mt-1 text-[15px] font-semibold text-ink-900">
                    Madrid y Comunidad
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-8 left-1/2 hidden w-[88%] -translate-x-1/2 rounded-2xl border border-black/10 bg-white/90 px-6 py-4 shadow-soft backdrop-blur lg:block">
              <div className="grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-[12px] font-semibold text-ink-600">
                    Respuesta rápida
                  </div>
                  <div className="mt-1 text-[13px] font-semibold text-ink-900">
                    Siniestros y urgencias
                  </div>
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-ink-600">
                    Ahorro energético
                  </div>
                  <div className="mt-1 text-[13px] font-semibold text-ink-900">
                    SATE por capas
                  </div>
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-ink-600">
                    Acabados premium
                  </div>
                  <div className="mt-1 text-[13px] font-semibold text-ink-900">
                    Obra nueva y reformas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
