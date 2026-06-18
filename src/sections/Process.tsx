import { useRef } from 'react'
import { useGsapReveal } from '../hooks/useGsapReveal'

const steps = [
  'Escuchamos tu necesidad',
  'Visitamos y evaluamos el proyecto',
  'Preparamos presupuesto',
  'Ejecutamos la obra',
  'Entregamos con garantía',
] as const

export function Process() {
  const scopeRef = useRef<HTMLElement | null>(null)

  useGsapReveal({
    scope: scopeRef,
    selector: '[data-process]',
    stagger: 0.1,
    y: 34,
    start: 'top 85%',
  })

  return (
    <section
      id="proceso"
      ref={(n) => {
        scopeRef.current = n
      }}
      className="bg-brand-light py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div data-process className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-brand-dark ring-1 ring-black/5">
            <span className="h-2 w-2 rounded-full bg-brand-green" />
            Metodología clara
          </div>
          <h2 className="mt-5 font-display text-[28px] font-semibold tracking-tight text-ink-900 sm:text-[34px]">
            Cómo trabajamos
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-600 sm:text-[15px]">
            Un proceso simple, transparente y orientado a resultados para que
            tengas control desde el primer día.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, idx) => (
            <div
              key={s}
              data-process
              className="relative rounded-[22px] border border-black/10 bg-white p-5 shadow-[0_18px_40px_-34px_rgba(16,24,40,0.55)]"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-soft text-[13px] font-semibold text-brand-dark ring-1 ring-black/5">
                  {idx + 1}
                </div>
                <div className="text-[13px] font-semibold text-ink-900">
                  Paso {idx + 1}
                </div>
              </div>
              <div className="mt-3 text-[13px] leading-relaxed text-ink-600">
                {s}
              </div>
              {idx !== steps.length - 1 ? (
                <div className="pointer-events-none absolute -right-2 top-1/2 hidden h-[2px] w-4 -translate-y-1/2 bg-brand-green/40 lg:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

