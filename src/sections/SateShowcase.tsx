import { Suspense, lazy, useRef } from 'react'
import { SectionBadge } from '../components/SectionBadge'
import { useGsapReveal } from '../hooks/useGsapReveal'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const LazySate3DModel = lazy(() =>
  import('./Sate3DModel').then((m) => ({ default: m.Sate3DModel })),
)

export function SateShowcase() {
  const scopeRef = useRef<HTMLElement | null>(null)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const reducedMotion = usePrefersReducedMotion()

  useGsapReveal({
    scope: scopeRef,
    selector: '[data-sate-reveal]',
    stagger: 0.08,
    y: 34,
    start: 'top 80%',
  })

  return (
    <section
      id="sate"
      ref={(n) => {
        scopeRef.current = n
      }}
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionBadge data-sate-reveal>
              Eficiencia energética
            </SectionBadge>
            <h2
              data-sate-reveal
              className="mt-5 font-display text-[28px] font-semibold tracking-tight text-ink-900 sm:text-[34px]"
            >
              Especialistas en sistemas SATE
            </h2>
            <p
              data-sate-reveal
              className="mt-3 max-w-xl text-[14px] leading-relaxed text-ink-600 sm:text-[15px]"
            >
              El SATE es un sistema de aislamiento térmico exterior por capas que
              mejora el confort, reduce el consumo y protege la fachada.
            </p>

            <div className="mt-7 grid gap-3">
              {[
                {
                  title: 'Muro',
                  desc: 'Base estructural sobre la que se aplica el sistema.',
                },
                {
                  title: 'Aislamiento',
                  desc: 'La capa clave para mejorar el rendimiento térmico.',
                },
                {
                  title: 'Mortero base',
                  desc: 'Refuerzo y protección con malla, listo para el acabado.',
                },
                {
                  title: 'Acabado exterior',
                  desc: 'Terminación estética y resistente a la intemperie.',
                },
              ].map((it) => (
                <div
                  key={it.title}
                  data-sate-reveal
                  className="rounded-2xl border border-black/10 bg-brand-light p-4"
                >
                  <div className="text-[13px] font-semibold text-ink-900">
                    {it.title}
                  </div>
                  <div className="mt-1 text-[13px] leading-relaxed text-ink-600">
                    {it.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-brand-soft via-white to-white blur-[1px]" />
            <div className="overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-card">
              {isDesktop && !reducedMotion ? (
                <div className="h-[420px] w-full">
                  <Suspense fallback={<div className="h-full w-full bg-brand-light" />}>
                    <LazySate3DModel />
                  </Suspense>
                </div>
              ) : (
                <div className="bg-brand-light/30 p-4 sm:p-6">
                  <img
                    src="/SATE3d.png"
                    alt="Esquema visual del sistema SATE por capas"
                    className="h-auto w-full rounded-[22px] border border-black/10 bg-white object-contain shadow-soft"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}

              <div className="border-t border-black/5 bg-white px-6 py-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-[13px] font-semibold text-ink-900">
                      Aislamiento exterior por capas
                    </div>
                    <div className="mt-1 text-[13px] text-ink-600">
                      Confort térmico, ahorro y protección de fachada.
                    </div>
                  </div>
                  <div className="text-[12px] font-semibold text-brand-green">
                    Ideal para rehabilitación energética
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
