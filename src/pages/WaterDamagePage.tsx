import {
  ChevronRight,
  CircleHelp,
  Droplets,
  Hammer,
  Home,
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
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20modern%20living%20room%20flooded%20with%20water%2C%20water%20reflection%2C%20clean%20interior%2C%20natural%20daylight%2C%20premium%20documentary%20photography%2C%20no%20people&image_size=landscape_16_9'

const beforeAfterImages = [
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20water%20damage%20wall%20and%20floor%2C%20wet%20stains%2C%20mold%20beginning%2C%20documentary%20restoration%20photo%2C%20no%20people&image_size=landscape_4_3',
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20restored%20clean%20room%20after%20water%20damage%20repair%2C%20fresh%20paint%2C%20dry%20floor%2C%20premium%20interior%20photography%2C%20no%20people&image_size=landscape_4_3',
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20flooded%20apartment%20floor%2C%20water%20on%20tiles%2C%20damage%20scene%2C%20documentary%20photography%2C%20no%20people&image_size=landscape_4_3',
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20renovated%20apartment%20after%20flood%20repair%2C%20dry%20floor%2C%20clean%20white%20walls%2C%20premium%20finish%2C%20no%20people&image_size=landscape_4_3',
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20water%20leak%20damage%20ceiling%20and%20wall%2C%20stains%2C%20humidity%2C%20documentary%20construction%20photography%2C%20no%20people&image_size=landscape_4_3',
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20repaired%20ceiling%20and%20walls%20after%20water%20leak%2C%20smooth%20paint%2C%20bright%20interior%2C%20premium%20photography%2C%20no%20people&image_size=landscape_4_3',
] as const

const beforeAfterCards = [
  { label: 'Antes', image: beforeAfterImages[0], isBefore: true },
  { label: 'Después', image: beforeAfterImages[1], isBefore: false },
  { label: 'Antes', image: beforeAfterImages[2], isBefore: true },
  { label: 'Después', image: beforeAfterImages[3], isBefore: false },
  { label: 'Antes', image: beforeAfterImages[4], isBefore: true },
  { label: 'Después', image: beforeAfterImages[5], isBefore: false },
] as const

const trustItems = [
  {
    title: 'Experiencia',
    description: 'Intervenciones en viviendas, locales y comunidades con daños por agua.',
    icon: ShieldCheck,
  },
  {
    title: 'Equipo especializado',
    description: 'Secado técnico, deshumidificación, limpieza y reparación completa.',
    icon: Users,
  },
  {
    title: 'Respuesta rápida',
    description: 'Actuamos con agilidad para evitar daños mayores y moho.',
    icon: Droplets,
  },
  {
    title: 'Garantía de calidad',
    description: 'Materiales adecuados y acabados garantizados en cada intervención.',
    icon: Sparkles,
  },
] as const

const steps = [
  {
    title: 'Evaluación inicial',
    description: 'Inspeccionamos el origen y el alcance de los daños por humedad o agua.',
    icon: Search,
  },
  {
    title: 'Extracción y secado',
    description: 'Eliminamos el agua y secamos con técnicas de deshumidificación profesional.',
    icon: Droplets,
  },
  {
    title: 'Limpieza y desinfección',
    description: 'Tratamos y desinfectamos para evitar olores, hongos y bacterias.',
    icon: ShieldCheck,
  },
  {
    title: 'Reparación y rehabilitación',
    description: 'Reparamos instalaciones, tabiquería, techos, suelos y elementos dañados.',
    icon: Home,
  },
  {
    title: 'Acabados',
    description: 'Pintura, revestimientos y detalles finales con acabados de calidad.',
    icon: Hammer,
  },
  {
    title: 'Entrega y garantía',
    description: 'Entregamos el espacio rehabilitado con garantía por escrito.',
    icon: Sparkles,
  },
] as const

const faqs = [
  {
    question: '¿Cuánto tarda una rehabilitación por agua o inundación?',
    answer:
      'Depende del nivel de afectación y del secado necesario. Tras la visita técnica definimos fases y un plazo realista de ejecución.',
  },
  {
    question: '¿Trabajáis con seguros?',
    answer:
      'Sí. Podemos coordinar informes y documentación técnica cuando interviene una aseguradora.',
  },
  {
    question: '¿Qué pasa si aparece moho u olor a humedad?',
    answer:
      'Aplicamos limpieza y desinfección específica y controlamos el secado para evitar hongos y malos olores.',
  },
  {
    question: '¿Ofrecéis garantía en los trabajos?',
    answer:
      'Sí. Entregamos la rehabilitación con garantía y control de calidad en cada fase del proceso.',
  },
] as const

export function WaterDamagePage() {
  const scopeRef = useRef<HTMLElement | null>(null)

  useGsapReveal({
    scope: scopeRef,
    selector: '[data-water-reveal]',
    stagger: 0.08,
    y: 28,
    start: 'top 86%',
  })

  return (
    <>
      <SEO
        title="Siniestros por agua e inundaciones en Madrid | IntegralProyect"
        description="Especialistas en siniestros por agua e inundaciones en Madrid. Secado técnico, desinfección, reparación y rehabilitación con garantía."
        keywords={[
          'siniestros inundaciones Madrid',
          'reparación daños por agua Madrid',
          'secado técnico Madrid',
          'deshumidificación Madrid',
          'rehabilitación por humedad Madrid',
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Siniestros por agua e inundaciones',
          provider: {
            '@type': 'LocalBusiness',
            name: 'IntegralProyect',
            email: 'info@integralproyect.com',
            telephone: '+34 91 123 45 67',
            areaServed: 'Madrid',
          },
          areaServed: 'Madrid',
          serviceType: 'Rehabilitación de siniestros por agua e inundaciones',
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
            <div className="absolute left-[-12%] top-[-30%] h-[500px] w-[500px] rounded-full bg-brand-soft blur-[75px]" />
          </div>

          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-16">
            <div className="relative z-10">
              <nav
                aria-label="Migas de pan"
                data-water-reveal
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
                  <li className="text-ink-900">Agua e inundaciones</li>
                </ol>
              </nav>

              <h1
                data-water-reveal
                className="mt-5 max-w-xl font-display text-[42px] font-semibold leading-[1.05] tracking-tighter2 text-ink-900 sm:text-[58px]"
              >
                Diseño y rehabilitación por agua o inundación.
                <span className="mt-1 block text-brand-green">
                  Devolvemos la seguridad a tu hogar o negocio.
                </span>
              </h1>

              <p
                data-water-reveal
                className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-600"
              >
                Actuamos con rapidez para eliminar el agua, secar, desinfectar y
                rehabilitar tu vivienda o local tras filtraciones, inundaciones
                o escapes.
              </p>
              <p
                data-water-reveal
                className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-600"
              >
                Prevenimos daños mayores y recuperamos tu espacio con todas las
                garantías.
              </p>

              <div data-water-reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
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

            <div data-water-reveal className="relative">
              <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-card">
                <img
                  src={heroImage}
                  alt="Vivienda con daños por agua o inundación antes de la rehabilitación"
                  className="h-[360px] w-full object-cover sm:h-[440px]"
                  fetchPriority="high"
                />
              </div>

              <div className="absolute bottom-5 right-5 rounded-[22px] border border-white/10 bg-brand-dark/95 px-5 py-4 text-white shadow-card backdrop-blur">
                <div className="flex items-start gap-3">
                  <Droplets className="mt-0.5 h-6 w-6 text-white" />
                  <div>
                    <div className="text-[14px] font-semibold">
                      Respuesta inmediata 24/7
                    </div>
                    <div className="mt-1 max-w-[220px] text-[12px] leading-relaxed text-white/75">
                      Disponibles para atender emergencias por agua e inundaciones.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-light py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-soft sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div data-water-reveal>
                  <SectionBadge>
                    ¿Por qué elegirnos?
                  </SectionBadge>
                  <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-ink-900">
                    Tu seguridad, nuestra prioridad
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {trustItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <article
                        key={item.title}
                        data-water-reveal
                        className="rounded-[22px] border border-black/5 bg-brand-light p-4"
                      >
                        <Icon className="h-8 w-8 text-brand-green" aria-hidden="true" />
                        <h3 className="mt-4 text-[14px] font-semibold text-ink-900">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-[12px] leading-relaxed text-ink-600">
                          {item.description}
                        </p>
                      </article>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div data-water-reveal className="max-w-2xl">
              <SectionBadge>
                Nos encargamos de todo
              </SectionBadge>
              <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-ink-900">
                ¿Qué incluye nuestro servicio?
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <article
                    key={step.title}
                    data-water-reveal
                    className="rounded-[22px] border border-black/10 bg-brand-light p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-full border border-brand-green/20 bg-white">
                        <Icon className="h-5 w-5 text-brand-green" />
                      </div>
                      <div className="text-[12px] font-semibold text-ink-600">
                        {idx + 1}.
                      </div>
                    </div>
                    <h3 className="mt-4 text-[14px] font-semibold text-ink-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-relaxed text-ink-600">
                      {step.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-brand-light py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div data-water-reveal className="max-w-2xl">
              <SectionBadge>
                Transformamos daños en nuevos comienzos
              </SectionBadge>
              <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-ink-900">
                Antes y después
              </h2>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {beforeAfterCards.map(({ label, image, isBefore }, idx) => (
                <article
                  key={`${label}-${idx}`}
                  data-water-reveal
                  className="overflow-hidden rounded-[22px] border border-black/10 bg-white shadow-[0_18px_36px_-30px_rgba(16,24,40,0.45)]"
                >
                  <div className="relative">
                    <img
                      src={image}
                      alt={`${label} de una rehabilitación por agua o inundación`}
                      className="h-52 w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <span
                      className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold ${
                        isBefore
                          ? 'bg-black/70 text-white'
                          : 'bg-brand-green text-white'
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-[28px] border border-black/10 bg-brand-light px-6 py-8 shadow-soft sm:px-10">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div data-water-reveal>
                  <h2 className="font-display text-[30px] font-semibold leading-tight text-ink-900">
                    ¿Necesitas ayuda urgente por agua o inundación?
                  </h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-600">
                    Llámanos ahora y te asesoramos sin compromiso. Estamos para
                    ayudarte.
                  </p>
                </div>
                <div data-water-reveal className="flex justify-start lg:justify-end">
                  <a
                    href="tel:+34911234567"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-5 py-3 text-[14px] font-semibold text-white shadow-soft transition hover:translate-y-[-1px] hover:bg-[#19662B]"
                  >
                    <Phone className="h-4 w-4" />
                    Llamar ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div data-water-reveal className="max-w-2xl">
              <SectionBadge>
                Preguntas frecuentes
              </SectionBadge>
              <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-ink-900">
                Resolvemos tus dudas
              </h2>
            </div>

            <div className="mt-8 grid gap-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  data-water-reveal
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
