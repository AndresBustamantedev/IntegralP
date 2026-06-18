import { useCallback, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'
import { FireDamagePage } from './pages/FireDamagePage'
import { Home } from './pages/Home'
import { RenovationsPage } from './pages/RenovationsPage'
import { SatePage } from './pages/SatePage'
import { WaterDamagePage } from './pages/WaterDamagePage'

export default function App() {
  const { scrollTo } = useLenis()
  const location = useLocation()

  const onNavigate = useCallback(
    (target: string) => {
      if (!target.startsWith('#')) return
      scrollTo(target)

      if (typeof window !== 'undefined' && window.history?.replaceState) {
        window.history.replaceState(null, '', target)
      }
    },
    [scrollTo],
  )

  useEffect(() => {
    if (!location.hash) return
    const t = location.hash
    const id = window.setTimeout(() => onNavigate(t), 60)
    return () => window.clearTimeout(id)
  }, [location.hash, onNavigate])

  useEffect(() => {
    if (location.hash) return
    scrollTo(0, { duration: 0, immediate: true })
  }, [location.hash, location.pathname, scrollTo])

  return (
    <Routes>
      <Route path="/" element={<Home onNavigate={onNavigate} />} />
      <Route path="/servicios/incendios" element={<FireDamagePage />} />
      <Route path="/servicios/sate" element={<SatePage />} />
      <Route path="/servicios/inundaciones" element={<WaterDamagePage />} />
      <Route path="/servicios/reformas" element={<RenovationsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
