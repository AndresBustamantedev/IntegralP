import { SEO } from '../components/SEO'
import { Benefits } from '../sections/Benefits'
import { ContactCTA } from '../sections/ContactCTA'
import { Footer } from '../sections/Footer'
import { Hero } from '../sections/Hero'
import { Navbar } from '../sections/Navbar'
import { ProjectsGallery } from '../sections/ProjectsGallery'
import { Process } from '../sections/Process'
import { SateShowcase } from '../sections/SateShowcase'
import { Services } from '../sections/Services'
import { TopBar } from '../sections/TopBar'

type HomeProps = {
  onNavigate: (target: string) => void
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <>
      <SEO
        title="IntegralProyect | Construcción, reformas y SATE en Madrid"
        description="Empresa de construcción en Madrid especializada en siniestros por inundación e incendio, sistemas SATE, obra nueva y reformas integrales."
        keywords={[
          'empresa de construcción Madrid',
          'reformas Madrid',
          'siniestros inundaciones Madrid',
          'rehabilitación incendios Madrid',
          'especialistas SATE Madrid',
          'obra nueva Madrid',
          'reformas integrales Madrid',
          'rehabilitación de fachadas Madrid',
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'IntegralProyect',
          areaServed: 'Madrid',
          telephone: '+34 91 123 45 67',
          email: 'info@integralproyect.com',
          serviceType: [
            'Construcción',
            'Reformas',
            'SATE',
            'Rehabilitación de siniestros',
            'Obra nueva',
          ],
        }}
      />

      <header>
        <TopBar />
        <Navbar onNavigate={onNavigate} />
      </header>

      <main>
        <Hero onNavigate={onNavigate} />
        <Services onNavigate={onNavigate} />
        <SateShowcase />
        <Benefits />
        <ProjectsGallery />
        <Process />
        <ContactCTA />
      </main>

      <Footer />
    </>
  )
}
