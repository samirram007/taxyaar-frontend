import { useAuth } from '@/features/auth/contexts/AuthContext'
import { Link } from '@tanstack/react-router'
import { Hamburger, MenuIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const Header = () => {
  const { isAuthenticated } = useAuth()
  const auth = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!isMenuOpen || !navRef.current) {
        return
      }

      const targetNode = event.target as Node | null
      if (targetNode && !navRef.current.contains(targetNode)) {
        setIsMenuOpen(false)
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)
    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isMenuOpen])

  const handleLogout = async () => {
    setIsMenuOpen(false)
    await auth.logout()
  }

  return (
    <header className="c-header-w w-full bg-blue-500 text-white">
      <div className="mx-auto w-full px-3 max-w-screen-2xl flex items-center justify-between py-4">
        <div className="c-logo-w flex-shrink-0">
          <Link to="/">
            <img src="img/logo.png" alt="Taxyaar" className="h-10 md:h-14 w-auto transition-all" />
          </Link>
        </div>
        {/* Hamburger for mobile */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="  p-2 rounded border-2 border-white focus:outline-none focus:ring-2 focus:ring-white"
            aria-expanded={isMenuOpen}
            aria-controls="primary-nav"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              // Close (X) icon SVG
              <MenuIcon className="w-6 h-6 text-white" />
            ) : (
              // Hamburger icon SVG
              <MenuIcon className="w-6 h-6 text-white" />
            )}
            <span className="sr-only">Menu</span>
          </button>
        </div>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/import-cg-shares"
            search={{ brokerId: 0 }}
            className="hover:underline">Import CG / Shares</Link>
          <Link to="/pricing" className="hover:underline">Pricing</Link>
          <Link to="/support" className="hover:underline">Support</Link>
          {isAuthenticated ? (
            <Link to="/dashboard" className="c-btn-1"><span>Dashboard</span></Link>
          ) : (
            <Link to="/sign-in" className="c-btn-1"><span>Login</span></Link>
          )}
          {isAuthenticated ? (
            <button onClick={handleLogout} className="c-btn-2"><span>Logout</span></button>
          ) : (
            <Link to="/sign-up" className="c-btn-2"><span>New User</span></Link>
          )}
        </nav>
        {/* Mobile nav dropdown */}
        {isMenuOpen && (
          <>
            <div className="fixed inset-0 bg-transparent z-40" onClick={() => setIsMenuOpen(false)}></div>
            <nav
              id="primary-nav"
              ref={navRef}
              className="fixed top-0 right-0 z-50 w-64 h-full bg-blue-600 shadow-lg flex flex-col p-6 animate-fade-in"
            >
              <button
                className="self-end mb-6 p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <i className="fa fa-times text-xl" aria-hidden="true"></i>
              </button>
              <ul className="space-y-4">
                <li>
                  <Link to="/import-cg-shares" search={{ brokerId: 0 }} onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold text-white shadow">Import CG / Shares</Link>
                </li>
                <li>
                  <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold text-white shadow">Pricing</Link>
                </li>
                <li>
                  <Link to="/support" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold text-white shadow">Support</Link>
                </li>
                <li>
                  {isAuthenticated ? (
                    <Link to="/dashboard" className="c-btn-1 block w-full text-center" onClick={() => setIsMenuOpen(false)}><span>Dashboard</span></Link>
                  ) : (
                    <Link to="/sign-in" className="c-btn-1 block w-full text-center" onClick={() => setIsMenuOpen(false)}><span>Login</span></Link>
                  )}
                </li>
                <li>
                  {isAuthenticated ? (
                    <button onClick={() => { setIsMenuOpen(false); handleLogout(); }} className="c-btn-2 block w-full text-center"><span>Logout</span></button>
                  ) : (
                    <Link to="/sign-up" className="c-btn-2 block w-full text-center" onClick={() => setIsMenuOpen(false)}><span>New User</span></Link>
                  )}
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </header>
  )
}

export default Header