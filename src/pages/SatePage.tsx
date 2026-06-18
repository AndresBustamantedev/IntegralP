import {
  BadgeCheck,
  Building2,
  Calculator,
  CircleHelp,
  Hammer,
  Leaf,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Wallet,
} from 'lucide-react'
import { useRef } from 'react'
import { SEO } from '../components/SEO'
import { useGsapReveal } from '../hooks/useGsapReveal'
import { Footer } from '../sections/Footer'
import { Navbar } from '../sections/Navbar'
import { TopBar } from '../sections/TopBar'

const heroImage =
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20modern%20apartment%20building%20with%20external%20thermal%20insulation%20system%2C%20white%20facade%2C%20premium%20architecture%2C%20madrid%20spain%2C%20natural%20sunlight%2C%20high%20end%20construction%20photography%2C%20no%20people&image_size=landscape_16_9'

const projectImages = [
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20facade%20rehabilitation%20before%20after%20style%2C%20residential%20building%20with%20new%20insulated%20finish%2C%20madrid%20spain%2C%20architectural%20photography%2C%20no%20people&image_size=landscape_4_3',
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20residential%20building%20with%20fresh%20SATE%20facade%2C%20warm%20light%2C%20clean%20modern%20finish%2C%20premium%20construction%20photography%2C%20no%20people&image_size=landscape_4_3',
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20apartment%20block%20energy%20rehabilitation%2C%20white%20and%20sand%20facade%2C%20premium%20exterior%20finish%2C%20architectural%20photography%2C%20no%20people&image_size=landscape_4_3',
  'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=photorealistic%20modernized%20building%20facade%20with%20SATE%20system%2C%20clean%20corners%2C%20energy%20efficient%20housing%2C%20premium%20architecture%20photo%2C%20no%20people&image_size=landscape_4_3',
] as const

const benefits = [
  {
    title: 'Ahorro energético',
    description: 'Reduce el consumo de calefacción y refrigeración.',
    icon: Wallet,
  },
  {
    title: 'Confort térmico',
    description: 'Temperatura estable todo el año sin puentes térmicos.',
    icon: Thermometer,
  },
  {
    title: 'Aislamiento acústico',
    description: 'Disminuye el ruido exterior de forma significativa.',
    icon: Leaf,
  },
  {
    title: 'Protección de fachada',
    description: 'Mayor durabilidad y resistencia frente a agentes externos.',
    icon: ShieldCheck,
  },
  {
    title: 'Compromiso sostenible',
    description: 'Menos emisiones y mayor eficiencia para tu inmueble.',
    icon: Sparkles,
  },
] as const

const steps = [
  {
    title: 'Estudio inicial',
    description:
      'Analizamos el edificio y sus necesidades para ofrecer la mejor solución.',
    icon: Search,
  },
  {
    title: 'Presupuesto detallado',
    description: 'Te presentamos una propuesta transparente y sin compromiso.',
    icon: Calculator,
  },
  {
    title: 'Instalación profesional',
    description: 'Equipo cualificado y materiales de primeras marcas.',
    icon: Building2,
  },
  {
    title: 'Acabados de calidad',
    description: 'Cuidamos cada detalle para un resultado impecable.',
    icon: Hammer,
  },
  {
    title: 'Garantía y confianza',
    description: 'Garantía por escrito en materiales y mano de obra.',
    icon: BadgeCheck,
  },
] as const

const faqs = [
  {
    question: '¿Qué es exactamente el sistema SATE?',
    answer:
      'Es un sistema de aislamiento térmico por el exterior compuesto por varias capas que mejoran la eficiencia energética, protegen la fachada y renuevan la imagen del edificio.',
  },
  {
    question: '¿Cuánto ahorro energético puede aportar?',
    answer:
      'Depende del estado del inmueble, pero una mejora bien ejecutada puede reducir notablemente la demanda energética y mejorar el confort interior durante todo el año.',
  },
  {
    question: '¿Se puede instalar en comunidades y viviendas unifamiliares?',
    answer:
      'Sí. Adaptamos la solución tanto a comunidades de vecinos como a viviendas unifamiliares, edificios residenciales y otros inmuebles.',
  },
  {
    question: '¿Incluye garantía?',
    answer:
      'Sí. Trabajamos con materiales adecuados, ejecución técnica y garantía sobre los trabajos realizados.',
  },
] as const

function LayerVisual() {
  return (
    <div className="relative mx-auto h-[290px] w-full max-w-[420px]">
      <div className="absolute bottom-0 left-6 h-8 w-[320px] rounded-[10px] bg-[#B5B7B0]" />
      <div className="absolute bottom-8 left-10 h-[210px] w-16 rounded-l-md bg-[#8E6244] shadow-soft" />
      <div className="absolute bottom-8 left-28 h-[215px] w-12 skew-y-[-8deg] rounded-sm bg-[#3C4147] shadow-soft" />
      <div className="absolute bottom-8 left-40 h-[222px] w-16 skew-y-[-8deg] rounded-sm bg-[#F0F1EC] shadow-soft" />
      <div className="absolute bottom-8 left-56 h-[218px] w-12 skew-y-[-8deg] rounded-sm bg-[#C9CBC4] shadow-soft" />
      <div className="absolute bottom-8 left-68 h-[210px] w-16 skew-y-[-8deg] rounded-sm bg-[#7EA264] shadow-soft" />

      {[
        { n: '1', left: '56px', bottom: '102px' },
        { n: '2', left: '122px', bottom: '92px' },
        { n: '3', left: '176px', bottom: '102px' },
        { n: '4', left: '232px', bottom: '92px' },
        { n: '5', left: '286px', bottom: '102px' },
      ].map((item) => (
        <div
          key={item.n}
          className="absolute grid h-7 w-7 place-items-center rounded-full bg-brand-green text-[12px] font-semibold text-white ring-4 ring-white"
          style={{ left: item.left, bottom: item.bottom }}
        >
          {item.n}
        </div>
      ))}
    </div>
  )
}

export function SatePage() {
  const scopeRef = useRef<HTMLElement | null>(null)

  useGsapReveal({
    scope: scopeRef,
    selector: '[data-sate-page-reveal]',
    stagger: 0.08,
    y: 28,
    start: 'top 86%',
  })

  return (
    <>
      <SEO
        title="SATE en Madrid | Aislamiento térmico exterior | IntegralProyect"
        description="Especialistas en SATE en Madrid. Mejora el aislamiento, protege la fachada y reduce el consumo energético con una instalación profesional."
        keywords={[
          'SATE Madrid',
          'aislamiento térmico exterior Madrid',
          'rehabilitación energética Madrid',
          'fachadas SATE Madrid',
          'eficiencia energética edificios Madrid',
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Instalación de sistemas SATE',
          provider: {
            '@type': 'LocalBusiness',
            name: 'IntegralProyect',
            email: 'info@integralproyect.com',
            telephone: '+34 91 123 45 67',
            areaServed: 'Madrid',
          },
          areaServed: 'Madrid',
          serviceType: 'Aislamiento térmico exterior SATE',
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

          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-16">
            <div className="relative z-10">
              <div
                data-sate-page-reveal
                className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 text-[12px] font-semibold text-brand-dark shadow-soft ring-1 ring-black/5"
              >
                <span className="h-2 w-2 rounded-full bg-brand-green" />
                Especialistas en SATE
              </div>
              <h1
                data-sate-page-reveal
                className="mt-5 max-w-xl font-display text-[42px] font-semibold leading-[1.05] tracking-tighter2 text-ink-900 sm:text-[58px]"
              >
                Sistemas SATE para
                <span className="block text-brand-green">
                  aislar, proteger y ahorrar.
                </span>
              </h1>
              <p
                data-sate-page-reveal
                className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-600"
              >
                El Sistema de Aislamiento Térmico por el Exterior mejora la
                eficiencia energética de tu vivienda o edificio, aumenta el
                confort interior y revaloriza la propiedad.
              </p>
              <p
                data-sate-page-reveal
                className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-600"
              >
                En IntegralProyect somos especialistas en la instalación de
                sistemas SATE con acabados de máxima calidad.
              </p>

              <div data-sate-page-reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
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

            <div data-sate-page-reveal className="relative">
              <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-card">
                <img
                  src={heroImage}
                  alt="Edificio residencial con sistema SATE y fachada renovada"
                  className="h-[360px] w-full object-cover sm:h-[440px]"
                  fetchPriority="high"
                />
              </div>

              <div className="absolute right-4 top-4 rounded-full border border-black/10 bg-white/92 px-5 py-5 text-center shadow-soft backdrop-blur sm:right-6 sm:top-6">
                <div className="text-[12px] font-semibold text-ink-600">
                  Ahorra hasta
                </div>
                <div className="mt-1 text-[38px] font-semibold leading-none text-brand-green">
                  40%
                </div>
                <div className="mt-1 max-w-[90px] text-[11px] font-semibold leading-tight text-ink-600">
                  en tu factura energética
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-light py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-soft sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.05fr_0.95fr] lg:items-center">
                <div data-sate-page-reveal>
                  <div className="text-[12px] font-semibold uppercase tracking-wide text-brand-green">
                    ¿Qué es el sistema SATE?
                  </div>
                  <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-ink-900">
                    Aislamiento térmico por el exterior
                  </h2>
                  <p className="mt-4 text-[14px] leading-relaxed text-ink-600">
                    El SATE consiste en aplicar un sistema de capas sobre la
                    fachada que elimina puentes térmicos, evita condensaciones y
                    protege el edificio frente a las inclemencias del tiempo.
                  </p>
                </div>

                <div data-sate-page-reveal>
                  <LayerVisual />
                </div>

                <div className="grid gap-4">
                  {[
                    ['1', 'Muro soporte', 'Base sobre la que se instala el sistema.'],
                    ['2', 'Adhesivo', 'Fijación de las placas aislantes al muro.'],
                    ['3', 'Aislamiento térmico', 'Placas de poliestireno expandido (EPS) o lana mineral.'],
                    ['4', 'Mortero base + malla', 'Capa de refuerzo con malla de fibra de vidrio.'],
                    ['5', 'Acabado final', 'Revestimiento decorativo y protector.'],
                  ].map(([n, title, text]) => (
                    <div
                      key={title}
                      data-sate-page-reveal
                      className="flex gap-3 rounded-2xl bg-brand-light p-3"
                    >
                      <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-green text-[12px] font-semibold text-white">
                        {n}
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-ink-900">
                          {title}
                        </div>
                        <div className="mt-1 text-[13px] leading-relaxed text-ink-600">
                          {text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {benefits.map((item) => {
                const Icon = item.icon
                return (
                  <article
                    key={item.title}
                    data-sate-page-reveal
                    className="rounded-[22px] border border-black/5 bg-white p-5 shadow-[0_18px_36px_-30px_rgba(16,24,40,0.45)]"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft ring-1 ring-black/5">
                      <Icon className="h-5 w-5 text-brand-green" />
                    </div>
                    <h3 className="mt-4 text-[15px] font-semibold text-ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink-600">
                      {item.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div data-sate-page-reveal className="max-w-2xl">
              <div className="text-[12px] font-semibold uppercase tracking-wide text-brand-green">
                Nuestro proceso
              </div>
              <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-ink-900">
                Así trabajamos tu proyecto SATE
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <article
                    key={step.title}
                    data-sate-page-reveal
                    className="relative rounded-[22px] border border-black/10 bg-brand-light p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-full border border-brand-green/20 bg-white">
                        <Icon className="h-5 w-5 text-brand-green" />
                      </div>
                      <div className="text-[12px] font-semibold text-ink-600">
                        {idx + 1}.
                      </div>
                    </div>
                    <h3 className="mt-4 text-[15px] font-semibold text-ink-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink-600">
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
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div data-sate-page-reveal>
                <div className="text-[12px] font-semibold uppercase tracking-wide text-brand-green">
                  Proyectos SATE
                </div>
                <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-ink-900">
                  Resultados que mejoran tu día a día
                </h2>
              </div>
              <a
                data-sate-page-reveal
                href="/#proyectos"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 text-[13px] font-semibold text-ink-900 transition hover:bg-brand-light"
              >
                Ver más proyectos
              </a>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                ['Rehabilitación de fachada', 'Madrid'],
                ['Eficiencia y confort', 'Majadahonda, Madrid'],
                ['Ahorro energético', 'Alcobendas, Madrid'],
                ['Protección y diseño', 'Las Rozas, Madrid'],
              ].map(([title, location], idx) => (
                <article
                  key={title}
                  data-sate-page-reveal
                  className="overflow-hidden rounded-[22px] border border-black/10 bg-white shadow-[0_18px_36px_-30px_rgba(16,24,40,0.45)]"
                >
                  <img
                    src={projectImages[idx]}
                    alt={title}
                    className="h-52 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-4">
                    <h3 className="text-[14px] font-semibold text-ink-900">{title}</h3>
                    <p className="mt-1 text-[12px] text-ink-600">{location}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-brand-dark py-16 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-r from-brand-dark via-[#0F4B25] to-brand-green px-6 py-8 shadow-card sm:px-10">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:items-center">
                <div data-sate-page-reveal>
                  <h2 className="font-display text-[32px] font-semibold leading-tight">
                    Mejora tu vivienda. Ahorra energía. Confía en especialistas en
                    SATE.
                  </h2>
                </div>
                <div
                  data-sate-page-reveal
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur"
                >
                  <div className="text-[12px] font-semibold text-white/70">
                    ¿Hablamos de tu proyecto?
                  </div>
                  <div className="mt-2 text-[30px] font-semibold leading-none">
                    91 123 45 67
                  </div>
                </div>
                <div data-sate-page-reveal className="flex justify-start lg:justify-end">
                  <a
                    href="mailto:info@integralproyect.com"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-[14px] font-semibold text-ink-900 shadow-soft transition hover:translate-y-[-1px] hover:bg-brand-light"
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
            <div data-sate-page-reveal className="max-w-2xl">
              <div className="text-[12px] font-semibold uppercase tracking-wide text-brand-green">
                Preguntas frecuentes
              </div>
              <h2 className="mt-3 font-display text-[30px] font-semibold tracking-tight text-ink-900">
                Resolvemos tus dudas
              </h2>
            </div>

            <div className="mt-8 grid gap-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  data-sate-page-reveal
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
