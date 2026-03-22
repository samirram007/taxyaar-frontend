import { Link } from '@tanstack/react-router'
import footerData from '../data/footer.json'

const Footer = () => {
  const {
    taxyaar,
    importantTools,
    corporate,
    otherLinks,
    copyright,
    disclaimer,
  } = footerData

  return (
    <footer className="c-footer-w">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <div className="c-footer-left">
              <div className="c-footer-logo">
                <Link to={'/'}>
                  <img src="img/logo.png" alt="" />
                </Link>
              </div>
              <ul>
                <li>
                  <Link to={'/'}>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </Link>
                    {' '}
                  <Link to={'/'}>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="c-footer-nav">
                  <h3>{taxyaar.heading}</h3>
                  <ul>
                    {taxyaar.links.map((link) => (
                      <li key={link}>
                        <Link to={'/'}>{link}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="c-footer-nav">
                  <h3>{importantTools.heading}</h3>
                  <ul>
                    {importantTools.links.map((link) => (
                      <li key={link}>
                        <Link to={'/'}>{link}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="c-footer-nav">
                  <h3>{corporate.heading}</h3>
                  <ul>
                    {corporate.links.map((link) => (
                      <li key={link}>
                        <Link to={'/'}>{link}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="c-footer-nav">
                  <h3>{otherLinks.heading}</h3>
                  <ul>
                    {otherLinks.links.map((link) => (
                      <li key={link}>
                        <Link to={'/'}>{link}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-footer-bottom">
          <p> {copyright} </p>
        </div>
        <div className="disclaimer">{disclaimer}</div>
      </div>
    </footer>
  )
}
export default Footer
