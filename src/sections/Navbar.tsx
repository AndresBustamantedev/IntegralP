import { clsx } from 'clsx'
import { Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type NavbarProps = {
  onNavigate?: (target: string) => void
}

export function Navbar({ onNavigate }: NavbarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const links = useMemo(
    () => [
      { label: 'Inicio', target: '#inicio' },
      { label: 'Servicios', target: '#servicios' },
      { label: 'Proyectos', target: '#proyectos' },
      { label: 'Nosotros', target: '#beneficios' },
      { label: 'Blog', target: '#blog', disabled: true },
      { label: 'Contacto', target: '#contacto' },
    ],
    [],
  )

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const handleNavigation = (target: string) => {
    if (!target.startsWith('#')) {
      navigate(target)
      return
    }

    if (location.pathname === '/' && onNavigate) {
      onNavigate(target)
      return
    }

    navigate(`/${target}`)
  }

  return (
    <div className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <button
          type="button"
          onClick={() => handleNavigation('#inicio')}
          className="group inline-flex items-center gap-3 text-left"
          aria-label="Ir a inicio"
        >
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft ring-1 ring-black/5 transition group-hover:shadow-soft">
            <div className="h-5 w-5 rounded-md bg-brand-green shadow-[inset_0_0_0_2px_rgba(255,255,255,0.65)]" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-[15px] font-semibold tracking-tight text-ink-900">
              INTEGRALPROYECT
            </div>
            <div className="text-[12px] text-ink-600">Construimos soluciones</div>
          </div>
        </button>

        <nav className="hidden items-center gap-7 text-[13px] font-semibold text-ink-900 lg:flex">
          {links.map((l) => (
            <button
              key={l.label}
              type="button"
              className={clsx(
                'group relative py-2 transition hover:text-brand-green',
                l.disabled && 'cursor-not-allowed text-ink-600/60 hover:text-ink-600/60',
              )}
              onClick={() => {
                if (l.disabled) return
                handleNavigation(l.target)
              }}
              aria-disabled={l.disabled || undefined}
              title={l.disabled ? 'Próximamente' : undefined}
            >
              {l.label}
              <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] scale-x-0 rounded-full bg-brand-green transition group-hover:scale-x-100" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNavigation('#contacto')}
            className="hidden rounded-xl bg-brand-green px-4 py-2 text-[13px] font-semibold text-white shadow-soft transition hover:translate-y-[-1px] hover:bg-[#19662B] active:translate-y-0 lg:inline-flex"
          >
            Presupuesto gratuito
          </button>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white shadow-[0_1px_0_rgba(16,24,40,0.06)] transition hover:bg-brand-light lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={clsx(
          'lg:hidden',
          open ? 'border-t border-black/5 bg-white/95 backdrop-blur' : 'hidden',
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4">
          {links.map((l) => (
            <button
              key={`mobile-${l.label}`}
              type="button"
              className={clsx(
                'flex items-center justify-between rounded-xl px-4 py-3 text-left text-[14px] font-semibold text-ink-900 transition hover:bg-brand-light',
                l.disabled && 'cursor-not-allowed text-ink-600/60 hover:bg-transparent',
              )}
              onClick={() => {
                if (l.disabled) return
                handleNavigation(l.target)
                setOpen(false)
              }}
              aria-disabled={l.disabled || undefined}
              title={l.disabled ? 'Próximamente' : undefined}
            >
              <span>{l.label}</span>
              {l.disabled ? (
                <span className="rounded-full bg-black/5 px-2 py-1 text-[11px] font-semibold text-ink-600">
                  Próximamente
                </span>
              ) : null}
            </button>
          ))}

          <button
            type="button"
            onClick={() => {
              handleNavigation('#contacto')
              setOpen(false)
            }}
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-brand-green px-4 py-3 text-[14px] font-semibold text-white shadow-soft transition hover:translate-y-[-1px] hover:bg-[#19662B] active:translate-y-0"
          >
            Presupuesto gratuito
          </button>
        </div>
      </div>
    </div>
  )
}
