import { ArrowRight, Mail, Phone } from 'lucide-react'

export function ContactCTA() {
  return (
    <section id="contacto" className="bg-brand-dark py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-brand-dark via-[#0E4A24] to-brand-green px-6 py-10 shadow-card sm:px-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[2px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-black/15 blur-[2px]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="font-display text-[30px] font-semibold tracking-tight text-white sm:text-[36px]">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
                Hablemos y hagámoslo realidad. Presupuesto gratuito y sin
                compromiso.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="mailto:info@integralproyect.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-[14px] font-semibold text-ink-900 shadow-soft transition hover:translate-y-[-1px] hover:bg-brand-light active:translate-y-0"
                >
                  <Mail className="h-4 w-4 text-brand-green" aria-hidden="true" />
                  Solicitar presupuesto
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="tel:+34911234567"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-[14px] font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  91 123 45 67
                </a>
              </div>
            </div>

            <div className="rounded-[22px] border border-white/15 bg-white/10 p-6 text-white backdrop-blur">
              <div className="text-[12px] font-semibold text-white/70">
                Atención local en Madrid
              </div>
              <div className="mt-2 text-[14px] font-semibold">
                Obra nueva · Reformas · SATE · Siniestros
              </div>
              <div className="mt-4 text-[13px] leading-relaxed text-white/80">
                Coordinación, materiales adecuados y acabados cuidados. Te
                informamos en cada fase del proyecto.
              </div>
              <div className="mt-5 grid gap-2 text-[13px] font-semibold">
                <a href="mailto:info@integralproyect.com" className="hover:text-white">
                  info@integralproyect.com
                </a>
                <a href="tel:+34911234567" className="hover:text-white">
                  91 123 45 67
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
