import { useAuth } from '@/features/auth/contexts/AuthContext'
import { Link } from '@tanstack/react-router'
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
    <header className="c-header-w">
      <div className="container">
        <div className="row">
          <div className="col-8 col-md-3">
            <div className="c-logo-w">
              <Link to="/">
                <img src="img/logo.png" alt="Taxyaar" />
              </Link>
            </div>
          </div>
          <div className="col-4 col-md-9">
            <div className="c-nav-w" ref={navRef}>
              <div className="c-nav-bottom">
                <button
                  type="button"
                  className="c-menu-btn"
                  aria-expanded={isMenuOpen}
                  aria-controls="primary-nav"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                  <i className="fa fa-bars" aria-hidden="true"></i> menu{' '}
                </button>
                <div
                  id="primary-nav"
                  className={`c-nav-bottom-list${isMenuOpen ? ' is-open' : ''}`}
                >
                  <ul>
                    <li>
                      <Link
                        to="/import-cg-shares" 
                      >
                        Import CG / Shares
                      </Link>
                    </li>
                    <li>
                      <Link to="/pricing"  >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link to="/support"  >
                        Support
                      </Link>
                    </li>
                    <li>
                      {isAuthenticated ? (
                        <Link
                          to="/dashboard"
                          className="c-btn-1" 
                        >
                          <span>Dashboard</span>
                        </Link>
                      ) : (
                        <Link
                          to="/sign-in"
                            className="c-btn-1" 
                        >
                          <span>Login</span>
                        </Link>
                      )}
                    </li>
                    <li>
                      {isAuthenticated ? (
                        <button onClick={handleLogout} className="c-btn-2">
                          <span>Logout</span>
                        </button>
                      ) : (
                        <Link
                          to="/sign-up"
                            className="c-btn-2"
                        >
                          <span>new user</span>
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
