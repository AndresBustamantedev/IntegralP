import {
  ChevronRight,
  CircleHelp,
  Clock3,
  Hammer,
  Home,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { useRef } from 'react'
import { SectionBadge } from '../components/SectionBadge'
import { SEO } from '../components/SEO'
import { useGsapReveal } from '../hooks/useGsapReveal'
import { Footer } from '../sections/Footer'
import { Navbar } from '../sections/Navbar'
import { TopBar } from '../sections/TopBar'

const heroImage =
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20premium%20modern%20open%20plan%20living%20room%20and%20kitchen%20renovation%2C%20warm%20natural%20sunlight%2C%20clean%20white%20walls%2C%20natural%20wood%2C%20high%20end%20finish%2C%20madrid%20spain%2C%20premium%20interior%20photography%2C%20ultra%20realistic%2C%20no%20people&image_size=landscape_16_9'

const trustVisualImage =
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20premium%20renovated%20interior%20detail%2C%20warm%20natural%20light%2C%20custom%20woodwork%2C%20clean%20contemporary%20home%2C%20high%20end%20construction%20finish%2C%20madrid%20spain%2C%20ultra%20realistic%2C%20no%20people&image_size=portrait_4_3'

const serviceCards = [
  {
    title: 'Reformas integrales',
    description: 'Renovamos tu vivienda o local de forma completa, con control de calidad y planificación.',
    icon: Home,
    image:
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20bright%20modern%20apartment%20renovation%20completed%2C%20clean%20minimal%20interior%2C%20premium%20finish%2C%20no%20people&image_size=landscape_4_3',
  },
  {
    title: 'Cocinas y baños',
    description: 'Diseño funcional, instalaciones, alicatados y acabados premium listos para disfrutar.',
    icon: Sparkles,
    image:
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20modern%20kitchen%20renovation%2C%20white%20cabinetry%2C%20stone%20countertop%2C%20warm%20light%2C%20premium%20interior%20photography%2C%20no%20people&image_size=landscape_4_3',
  },
  {
    title: 'Obra nueva',
    description: 'Proyectos de obra nueva con soluciones técnicas, eficiencia y gestión integral.',
    icon: Hammer,
    image:
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20modern%20new%20build%20villa%20exterior%2C%20clean%20white%20architecture%2C%20glass%20windows%2C%20premium%20construction%20finish%2C%20madrid%20spain%2C%20no%20people&image_size=landscape_4_3',
  },
  {
    title: 'Rehabilitación de viviendas',
    description: 'Mejoramos confort, distribución e instalaciones para actualizar tu inmueble.',
    icon: ShieldCheck,
    image:
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20home%20rehabilitation%20interior%2C%20fresh%20paint%2C%20new%20flooring%2C%20clean%20premium%20finish%2C%20no%20people&image_size=landscape_4_3',
  },
  {
    title: 'Locales y oficinas',
    description: 'Espacios comerciales funcionales, adaptados a normativa y listos para abrir.',
    icon: Users,
    image:
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20modern%20office%20fit%20out%20renovation%2C%20clean%20minimal%20workspace%2C%20premium%20finish%2C%20no%20people&image_size=landscape_4_3',
  },
  {
    title: 'Eficiencia energética',
    description: 'Mejoras en aislamiento, carpinterías y confort para reducir consumos.',
    icon: MapPin,
    image:
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20modern%20home%20energy%20efficient%20upgrade%2C%20double%20glazing%2C%20insulation%20detail%2C%20premium%20construction%20photography%2C%20no%20people&image_size=landscape_4_3',
  },
] as const

const trustItems = [
  {
    title: 'Experiencia',
    description: 'Más de 15 años ejecutando reformas y obra nueva con acabados cuidados.',
    icon: ShieldCheck,
  },
  {
    title: 'Asesoramiento',
    description: 'Te acompañamos desde la idea hasta la entrega, con criterio técnico y estético.',
    icon: Users,
  },
  {
    title: 'Gestión integral',
    description: 'Tramitación, coordinación y seguimiento de la obra en cada fase.',
    icon: Home,
  },
  {
    title: 'Transparencia',
    description: 'Presupuestos claros, comunicación constante y sin sorpresas.',
    icon: Search,
  },
  {
    title: 'Cumplimiento de plazos',
    description: 'Planificación realista y seguimiento diario para entregar en fecha.',
    icon: Clock3,
  },
  {
    title: 'Garantía',
    description: 'Control de calidad y garantía por escrito en nuestros trabajos.',
    icon: Sparkles,
  },
] as const

const steps = [
  {
    title: 'Escuchamos',
    description: 'Entendemos tus necesidades y objetivos de diseño, uso y presupuesto.',
    icon: Users,
  },
  {
    title: 'Diseñamos',
    description: 'Propuesta y planificación. Definimos materiales, acabados y fases de ejecución.',
    icon: Sparkles,
  },
  {
    title: 'Planificamos',
    description: 'Calendario de obra, coordinación de oficios y pedidos para cumplir plazos.',
    icon: Clock3,
  },
  {
    title: 'Ejecutamos',
    description: 'Dirección técnica y control de calidad con seguimiento continuo.',
    icon: Hammer,
  },
  {
    title: 'Entregamos',
    description: 'Remates finales, limpieza y entrega del proyecto terminado con garantía.',
    icon: ShieldCheck,
  },
] as const

const beforeAfterImages = [
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20outdated%20living%20room%20before%20renovation%2C%20old%20floor%2C%20poor%20lighting%2C%20no%20people&image_size=landscape_4_3',
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20bright%20renovated%20living%20room%2C%20modern%20minimal%20design%2C%20premium%20finish%2C%20natural%20light%2C%20no%20people&image_size=landscape_4_3',
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20old%20kitchen%20before%20renovation%2C%20worn%20cabinets%2C%20low%20light%2C%20no%20people&image_size=landscape_4_3',
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20renovated%20modern%20kitchen%2C%20white%20cabinetry%2C%20stone%20countertop%2C%20premium%20finish%2C%20no%20people&image_size=landscape_4_3',
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20old%20bathroom%20before%20renovation%2C%20dated%20tiles%2C%20small%20space%2C%20no%20people&image_size=landscape_4_3',
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20modern%20bathroom%20after%20renovation%2C%20clean%20tiles%2C%20glass%20shower%2C%20premium%20finish%2C%20no%20people&image_size=landscape_4_3',
] as const

const beforeAfterCards = [
  { label: 'Antes', image: beforeAfterImages[0], isBefore: true },
  { label: 'Después', image: beforeAfterImages[1], isBefore: false },
  { label: 'Antes', image: beforeAfterImages[2], isBefore: true },
  { label: 'Después', image: beforeAfterImages[3], isBefore: false },
  { label: 'Antes', image: beforeAfterImages[4], isBefore: true },
  { label: 'Después', image: beforeAfterImages[5], isBefore: false },
] as const

const faqs = [
  {
    question: '¿Hacéis reformas integrales en Madrid?',
    answer:
      'Sí. Realizamos reformas integrales de viviendas, locales y oficinas en Madrid, adaptándonos a tus necesidades y objetivos.',
  },
  {
    question: '¿Podéis ayudar con el diseño y elección de materiales?',
    answer:
      'Sí. Te asesoramos en distribución, acabados y materiales para equilibrar estética, calidad y presupuesto.',
  },
  {
    question: '¿Cuánto tarda una reforma?',
    answer:
      'Depende del alcance. Tras la visita técnica te damos un plan de obra con fases y plazos estimados.',
  },
  {
    question: '¿Ofrecéis garantía?',
    answer:
      'Sí. Entregamos los trabajos con control de calidad y garantía por escrito.',
  },
] as const

export function RenovationsPage() {
  const scopeRef = useRef<HTMLElement | null>(null)

  useGsapReveal({
    scope: scopeRef,
    selector: '[data-renov-reveal]',
    stagger: 0.1,
    y: 28,
    start: 'top 86%',
  })

  return (
    <>
      <SEO
        title="Reformas y obra nueva en Madrid | IntegralProyect"
        description="Reformas integrales, cocinas y baños, obra nueva y rehabilitación en Madrid. Diseño, gestión integral, plazos y acabados premium."
        keywords={[
          'reformas Madrid',
          'reformas integrales Madrid',
          'obra nueva Madrid',
          'reformas cocina Madrid',
          'reformas baño Madrid',
          'reforma local Madrid',
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Reformas y obra nueva',
          provider: {
            '@type': 'LocalBusiness',
            name: 'IntegralProyect',
            email: 'info@integralproyect.com',
            telephone: '+34 91 123 45 67',
            areaServed: 'Madrid',
          },
          areaServed: 'Madrid',
          serviceType: 'Reformas y obra nueva',
        }}
      />

      <TopBar />
      <Navbar />

      <main
        ref={(node) => {
          scopeRef.current = node
        }}
      >
        <section id="inicio" className="relative overflow-hidden bg-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-12%] top-[-30%] h-[520px] w-[520px] rounded-full bg-brand-soft blur-[80px]" />
          </div>

          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-16">
            <div className="relative z-10">
              <nav
                aria-label="Migas de pan"
                data-renov-reveal
                className="flex items-center gap-3 text-[12px] font-semibold text-ink-600"
              >
                <span className="h-[1px] w-8 bg-brand-green/55" />
                <ol className="flex items-center gap-2">
                  <li>
                    <a href="/#inicio" className="hover:text-brand-green">
                      Inicio
                    </a>
                  </li>
                  <li aria-hidden="true">
                    <ChevronRight className="h-4 w-4 text-ink-600/50" />
                  </li>
                  <li>
                    <a href="/#servicios" className="hover:text-brand-green">
                      Servicios
                    </a>
                  </li>
                  <li aria-hidden="true">
                    <ChevronRight className="h-4 w-4 text-ink-600/50" />
                  </li>
                  <li className="text-ink-900">Reformas y obra nueva</li>
                </ol>
              </nav>

              <h1
                data-renov-reveal
                className="mt-5 max-w-xl font-display text-[42px] font-semibold leading-[1.05] tracking-tighter2 text-ink-900 sm:text-[58px]"
              >
                Transformamos espacios,{' '}
                <span className="text-brand-green">construimos sueños.</span>
              </h1>

              <p
                data-renov-reveal
                className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-600"
              >
                Reformas integrales y proyectos de obra nueva en Madrid. Diseño,
                calidad y eficiencia en cada detalle para crear espacios
                modernos, funcionales y duraderos.
              </p>

              <div
                data-renov-reveal
                className="mt-7 grid max-w-xl gap-4 sm:grid-cols-2"
              >
                {[
                  { label: 'Diseño a medida', icon: Home },
                  { label: 'Calidad garantizada', icon: ShieldCheck },
                  { label: 'Plazos cumplidos', icon: Clock3 },
                  { label: 'Gestión integral', icon: Users },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/80 px-4 py-3 shadow-[0_10px_20px_-22px_rgba(16,24,40,0.55)] backdrop-blur"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-soft ring-1 ring-black/5">
                      <item.icon className="h-5 w-5 text-brand-green" />
                    </div>
                    <div className="text-[13px] font-semibold text-ink-900">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <div data-renov-reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:info@integralproyect.com"
                  className="inline-flex items-center justify-center rounded-xl bg-brand-green px-5 py-3 text-[14px] font-semibold text-white shadow-soft transition hover:translate-y-[-1px] hover:bg-[#19662B]"
                >
                  Solicitar presupuesto
                </a>
                <a
                  href="tel:+34911234567"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-green/20 bg-white px-5 py-3 text-[14px] font-semibold text-brand-dark shadow-[0_1px_0_rgba(16,24,40,0.05)] transition hover:bg-brand-light"
                >
                  <Phone className="h-4 w-4 text-brand-green" />
                  Llámanos ahora
                </a>
              </div>
            </div>

            <div data-renov-reveal className="relative">
              <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-card">
                <img
                  src={heroImage}
                  alt="Interior reformado con acabados premium en Madrid"
                  className="h-[360px] w-full object-cover sm:h-[460px]"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>

              <div className="absolute bottom-5 right-5 rounded-[22px] border border-white/10 bg-brand-dark/95 px-5 py-4 text-white shadow-card backdrop-blur">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-6 w-6 text-white" />
                  <div>
                    <div className="text-[14px] font-semibold">
                      Calidad y acabados premium
                    </div>
                    <div className="mt-1 max-w-[240px] text-[12px] leading-relaxed text-white/75">
                      Materiales adecuados y detalle técnico para un resultado
                      durable y elegante.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-light py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div
              data-renov-reveal
              className="grid gap-10 rounded-[28px] border border-black/5 bg-white p-8 shadow-soft sm:p-10 lg:grid-cols-[0.45fr_0.55fr]"
            >
              <div>
                <SectionBadge>¿Por qué elegirnos?</SectionBadge>
                <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-ink-900">
                  Tu proyecto, en buenas manos
                </h2>
                <p className="mt-4 text-[14px] leading-relaxed text-ink-600">
                  Planificación rigurosa, coordinación de oficios y comunicación
                  constante para que disfrutes del proceso con tranquilidad.
                </p>
                <div
                  data-renov-reveal
                  className="relative mt-8 hidden min-h-[calc(100%-11.5rem)] overflow-hidden rounded-[26px] lg:block"
                >
                  <img
                    src={trustVisualImage}
                    alt="Detalle de reforma interior con acabados premium"
                    className="h-full min-h-[460px] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/88 via-brand-dark/45 to-transparent p-5 text-white">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                      IntegralProyect
                    </div>
                    <div className="mt-2 max-w-[260px] text-[15px] font-semibold leading-snug">
                      Diseño, ejecución y control de detalle en una sola empresa.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[26px] bg-brand-light/60 p-4 ring-1 ring-black/5 sm:p-5">
                <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
                {trustItems.map((item) => (
                  <div
                    key={item.title}
                    data-renov-reveal
                    className="group rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-[0_18px_36px_-32px_rgba(16,24,40,0.55)] transition hover:-translate-y-0.5 hover:shadow-card"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-light ring-1 ring-black/5">
                      <item.icon className="h-6 w-6 text-brand-green" />
                    </div>
                    <div className="mt-4 text-[15px] font-semibold text-ink-900">
                      {item.title}
                    </div>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink-600">
                      {item.description}
                    </p>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div data-renov-reveal className="max-w-2xl">
              <SectionBadge>Nuestros servicios</SectionBadge>
              <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-ink-900">
                Reformas y obra nueva
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {serviceCards.map((card) => (
                <article
                  key={card.title}
                  data-renov-reveal
                  className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_12px_26px_-22px_rgba(16,24,40,0.45)] transition hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-44 w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-2xl bg-white/92 ring-1 ring-black/10 backdrop-blur">
                      <card.icon className="h-5 w-5 text-brand-green" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[15px] font-semibold text-ink-900">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink-600">
                      {card.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-light py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div data-renov-reveal className="max-w-2xl">
              <SectionBadge>Proyectos realizados</SectionBadge>
              <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-ink-900">
                Antes y después
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {beforeAfterCards.map((card) => (
                <article
                  key={`${card.label}-${card.image}`}
                  data-renov-reveal
                  className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_12px_26px_-22px_rgba(16,24,40,0.45)]"
                >
                  <div className="relative">
                    <img
                      src={card.image}
                      alt={`Proyecto ${card.label.toLowerCase()} de reforma`}
                      className="h-44 w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-[11px] font-semibold text-ink-900 ring-1 ring-black/10 backdrop-blur">
                      <span
                        className={
                          card.isBefore ? 'text-ink-900' : 'text-brand-green'
                        }
                      >
                        {card.label.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div data-renov-reveal className="max-w-2xl">
              <SectionBadge>Así trabajamos</SectionBadge>
              <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-ink-900">
                Nuestro proceso
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, idx) => (
                <div
                  key={step.title}
                  data-renov-reveal
                  className="rounded-3xl border border-black/10 bg-brand-light p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white ring-1 ring-black/5">
                      <step.icon className="h-6 w-6 text-brand-green" />
                    </div>
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-green text-[13px] font-semibold text-white">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="mt-5 text-[15px] font-semibold text-ink-900">
                    {step.title}
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-light py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-soft sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div data-renov-reveal className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft ring-1 ring-black/5">
                    <Phone className="h-6 w-6 text-brand-green" />
                  </div>
                  <div>
                    <h2 className="font-display text-[26px] font-semibold tracking-tight text-ink-900">
                      ¿Tienes un proyecto en mente?
                    </h2>
                    <p className="mt-3 text-[14px] leading-relaxed text-ink-600">
                      Cuéntanos tu idea y te asesoramos sin compromiso. Estamos
                      para ayudarte.
                    </p>
                  </div>
                </div>
                <div data-renov-reveal className="flex justify-start lg:justify-end">
                  <a
                    href="mailto:info@integralproyect.com"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-5 py-3 text-[14px] font-semibold text-white shadow-soft transition hover:translate-y-[-1px] hover:bg-[#19662B]"
                  >
                    Solicitar presupuesto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div data-renov-reveal className="max-w-2xl">
              <SectionBadge>Preguntas frecuentes</SectionBadge>
              <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-ink-900">
                Resolvemos tus dudas
              </h2>
            </div>

            <div className="mt-8 grid gap-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  data-renov-reveal
                  className="group rounded-2xl border border-black/10 bg-brand-light p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-ink-900">
                    {faq.question}
                    <CircleHelp className="h-5 w-5 shrink-0 text-brand-green transition group-open:rotate-12" />
                  </summary>
                  <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-ink-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
