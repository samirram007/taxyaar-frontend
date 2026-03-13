import { useAuth } from '@/features/auth/contexts/AuthContext'
import { Link } from '@tanstack/react-router'

const Header = () => {
  const { isAuthenticated } = useAuth()
  const auth = useAuth()

  const handleLogout = async () => {
    await auth.logout()
  }

  return (
    <header className="c-header-w">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="c-logo-w">
              <Link to="/">
                <img src="img/logo.png" alt="Taxyaar" />
              </Link>
            </div>
          </div>
          <div className="col-md-9">
            <div className="c-nav-w">
              <div className="c-nav-bottom">
                <button type="button" className="c-menu-btn">
                  <i className="fa fa-bars" aria-hidden="true"></i> menu{' '}
                </button>
                <div className="c-nav-bottom-list">
                  <ul>
                    <li>
                      <Link
                        to="/import-cg-shares"
                        search={{ brokerId: undefined }}
                      >
                        Import CG / Shares
                      </Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/support">Support</Link>
                    </li>
                    <li>
                      {isAuthenticated ? (
                        <Link to="/dashboard" className="c-btn-1">
                          <span>Dashboard</span>
                        </Link>
                      ) : (
                        <Link to="/sign-in" className="c-btn-1">
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
                        <Link to="/sign-up" className="c-btn-2">
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
