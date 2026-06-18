import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.7fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
                <div className="h-5 w-5 rounded-md bg-brand-green shadow-[inset_0_0_0_2px_rgba(255,255,255,0.65)]" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-[15px] font-semibold tracking-tight">
                  INTEGRALPROYECT
                </div>
                <div className="text-[12px] text-white/70">
                  Construimos soluciones
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-white/75">
              Empresa de construcción en Madrid especializada en siniestros,
              rehabilitación, SATE, obra nueva y reformas integrales.
            </p>
          </div>

          <div>
            <div className="text-[12px] font-semibold tracking-wide text-white/70">
              Empresa
            </div>
            <ul className="mt-4 grid gap-2 text-[13px] font-semibold">
              <li>
                <a href="/#inicio" className="text-white/80 hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/#servicios" className="text-white/80 hover:text-white">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/#proyectos" className="text-white/80 hover:text-white">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="/#beneficios" className="text-white/80 hover:text-white">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[12px] font-semibold tracking-wide text-white/70">
              Servicios
            </div>
            <ul className="mt-4 grid gap-2 text-[13px] font-semibold">
              <li className="text-white/80">Siniestros por inundaciones</li>
              <li className="text-white/80">Siniestros por incendios</li>
              <li className="text-white/80">Especialistas en SATE</li>
              <li className="text-white/80">Obra nueva y reformas</li>
            </ul>
          </div>

          <div>
            <div className="text-[12px] font-semibold tracking-wide text-white/70">
              Contacto
            </div>
            <div className="mt-4 grid gap-3 text-[13px] font-semibold">
              <div className="flex items-start gap-2 text-white/80">
                <MapPin className="mt-0.5 h-4 w-4 text-white/70" />
                <span>Madrid, Comunidad de Madrid</span>
              </div>
              <a
                href="tel:+34911234567"
                className="flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Phone className="h-4 w-4 text-white/70" />
                91 123 45 67
              </a>
              <a
                href="mailto:info@integralproyect.com"
                className="flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Mail className="h-4 w-4 text-white/70" />
                info@integralproyect.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[12px] text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} IntegralProyect. Todos los derechos
            reservados.
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 font-semibold">
            <a href="#legal" className="text-white/70 hover:text-white">
              Aviso legal
            </a>
            <a href="#privacidad" className="text-white/70 hover:text-white">
              Política de privacidad
            </a>
            <a href="#cookies" className="text-white/70 hover:text-white">
              Política de cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
