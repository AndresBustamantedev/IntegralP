import { useCallback, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'
import { Home } from './pages/Home'
import { SatePage } from './pages/SatePage'

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

  return (
    <Routes>
      <Route path="/" element={<Home onNavigate={onNavigate} />} />
      <Route path="/servicios/sate" element={<SatePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
