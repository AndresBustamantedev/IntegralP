import { Mail, MapPin, Phone } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-brand-dark text-white/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-[13px]">
        <div className="hidden items-center gap-2 sm:flex">
          <MapPin className="h-4 w-4 text-white/80" aria-hidden="true" />
          <span className="text-white/90">Empresa de construcción en Madrid</span>
        </div>
        <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end">
          <a
            className="inline-flex items-center gap-2 hover:text-white"
            href="tel:+34911234567"
          >
            <Phone className="h-4 w-4 text-white/80" aria-hidden="true" />
            <span>91 123 45 67</span>
          </a>
          <a
            className="inline-flex items-center gap-2 hover:text-white"
            href="mailto:info@integralproyect.com"
          >
            <Mail className="h-4 w-4 text-white/80" aria-hidden="true" />
            <span>info@integralproyect.com</span>
          </a>
        </div>
      </div>
    </div>
  )
}
