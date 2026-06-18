import { Helmet } from 'react-helmet-async'

type StructuredData = Record<string, unknown>

type SEOProps = {
  title: string
  description: string
  keywords?: string[]
  structuredData?: StructuredData
}

export function SEO({ title, description, keywords, structuredData }: SEOProps) {
  const url = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords?.length ? (
        <meta name="keywords" content={keywords.join(', ')} />
      ) : null}
      <meta name="theme-color" content="#0B3D1E" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {url ? <meta property="og:url" content={url} /> : null}

      {structuredData ? (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      ) : null}
    </Helmet>
  )
}

