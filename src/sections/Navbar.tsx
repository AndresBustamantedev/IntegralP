import { clsx } from 'clsx'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type NavbarProps = {
  onNavigate?: (target: string) => void
}

export function Navbar({ onNavigate }: NavbarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const serviceItems = useMemo(
    () => [
      {
        label: 'Siniestros por inundaciones',
        description: 'Actuación rápida ante agua, fugas e inundaciones.',
        target: '/servicios/inundaciones',
      },
      {
        label: 'Siniestros por incendios',
        description: 'Rehabilitación completa tras daños por fuego y humo.',
        target: '/servicios/incendios',
      },
      {
        label: 'Especialistas en SATE',
        description: 'Aislamiento térmico exterior para confort y ahorro.',
        target: '/servicios/sate',
      },
      {
        label: 'Reformas y obra nueva',
        description: 'Proyectos integrales, reformas y construcción.',
        target: '/servicios/reformas',
      },
    ],
    [],
  )
  const links = useMemo(
    () => [
      { label: 'Inicio', target: '#inicio' },
      { label: 'Proyectos', target: '#proyectos' },
      { label: 'Nosotros', target: '#beneficios' },
      { label: 'Blog', target: '#blog', disabled: true },
      { label: 'Contacto', target: '#contacto' },
    ],
    [],
  )

  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [navPinnedTop, setNavPinnedTop] = useState(false)

  useEffect(() => {
    if (!open && !servicesOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setServicesOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, servicesOpen])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onScroll = () => {
      setNavPinnedTop(window.scrollY > 36)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
    <>
      <div className="h-[76px]" aria-hidden="true" />
      <div
        className={clsx(
          'fixed inset-x-0 z-[55] border-b border-black/5 bg-white/80 backdrop-blur transition-[top] duration-300',
          navPinnedTop ? 'top-0' : 'top-10',
        )}
      >
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
            <div
              className="relative pt-3 -mt-3"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="group relative inline-flex items-center gap-1 py-2 transition hover:text-brand-green"
                onClick={() => setServicesOpen((value) => !value)}
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
              >
                <span>Servicios</span>
                <ChevronDown
                  className={clsx(
                    'h-4 w-4 transition duration-200',
                    servicesOpen && 'rotate-180 text-brand-green',
                  )}
                />
                <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] scale-x-0 rounded-full bg-brand-green transition group-hover:scale-x-100" />
              </button>

              <div
                className={clsx(
                  'absolute left-1/2 top-full z-20 w-[340px] -translate-x-1/2 rounded-3xl border border-black/10 bg-white p-3 shadow-card transition duration-200',
                  servicesOpen
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-2 opacity-0',
                )}
              >
                <div className="grid gap-1">
                  {serviceItems.map((item) => (
                    <button
                      key={item.target}
                      type="button"
                      className="rounded-2xl px-4 py-3 text-left transition hover:bg-brand-light"
                      onClick={() => {
                        handleNavigation(item.target)
                        setServicesOpen(false)
                      }}
                    >
                      <div className="text-[13px] font-semibold text-ink-900">
                        {item.label}
                      </div>
                      <div className="mt-1 text-[12px] leading-relaxed text-ink-600">
                        {item.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

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
            <div className="rounded-xl border border-black/5 bg-brand-light/40 p-2">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[14px] font-semibold text-ink-900 transition hover:bg-white"
                onClick={() => setMobileServicesOpen((value) => !value)}
                aria-expanded={mobileServicesOpen}
              >
                <span>Servicios</span>
                <ChevronDown
                  className={clsx(
                    'h-4 w-4 transition duration-200',
                    mobileServicesOpen && 'rotate-180 text-brand-green',
                  )}
                />
              </button>

              <div
                className={clsx(
                  'grid overflow-hidden transition-all duration-200',
                  mobileServicesOpen
                    ? 'mt-2 grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0',
                )}
              >
                <div className="min-h-0">
                  <div className="grid gap-1 px-2 pb-2">
                    {serviceItems.map((item) => (
                      <button
                        key={`mobile-service-${item.target}`}
                        type="button"
                        className="rounded-xl bg-white px-4 py-3 text-left transition hover:bg-brand-light"
                        onClick={() => {
                          handleNavigation(item.target)
                          setOpen(false)
                          setMobileServicesOpen(false)
                        }}
                      >
                        <div className="text-[13px] font-semibold text-ink-900">
                          {item.label}
                        </div>
                        <div className="mt-1 text-[12px] leading-relaxed text-ink-600">
                          {item.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

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
    </>
  )
}
