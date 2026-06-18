import { Suspense, lazy, useRef } from 'react'
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
            <div
              data-sate-reveal
              className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 text-[12px] font-semibold text-brand-dark ring-1 ring-black/5"
            >
              <span className="h-2 w-2 rounded-full bg-brand-green" />
              Eficiencia energética
            </div>
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
                <div className="px-6 py-10">
                  <div className="mx-auto max-w-sm">
                    <div className="relative h-56 w-full">
                      <div className="absolute inset-0 grid place-items-center">
                        <div className="relative h-44 w-72">
                          <div className="absolute inset-0 translate-x-3 translate-y-4 rounded-2xl bg-white shadow-soft ring-1 ring-black/10" />
                          <div className="absolute inset-0 translate-x-2 translate-y-3 rounded-2xl bg-[#CFE8D6] shadow-soft ring-1 ring-black/10" />
                          <div className="absolute inset-0 translate-x-1 translate-y-2 rounded-2xl bg-brand-green shadow-soft ring-1 ring-black/10" />
                          <div className="absolute inset-0 translate-y-1 rounded-2xl bg-[#3B4654] shadow-soft ring-1 ring-black/10" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 text-center text-[13px] leading-relaxed text-ink-600">
                      Mostramos una versión estática para priorizar rendimiento.
                    </div>
                  </div>
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
