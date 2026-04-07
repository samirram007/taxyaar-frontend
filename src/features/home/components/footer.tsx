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
    <footer className="w-full bg-blue-900 text-white pt-12 pb-6 border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          <div className="flex-1 mb-8 md:mb-0 flex flex-col items-start">
            <Link to={'/'} className="mb-4 inline-block">
              <img src="img/logo.png" alt="Taxyaar" className="h-24 text-shadow-lg w-auto" />
            </Link>
            <div className="flex space-x-4 mb-4">
              <Link to={'/'} className="hover:text-blue-300"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
              <Link to={'/'} className="hover:text-blue-300"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
              <Link to={'/'} className="hover:text-blue-300"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
            </div>
          </div>
          <div className="flex-[3] grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3 text-blue-100">{taxyaar.heading}</h3>
              <ul className="space-y-1">
                {taxyaar.links.map((link) => (
                  <li key={link}>
                    <Link to={'/'} className="hover:text-blue-300 text-sm">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-blue-100">{importantTools.heading}</h3>
              <ul className="space-y-1">
                {importantTools.links.map((link) => (
                  <li key={link}>
                    <Link to={'/'} className="hover:text-blue-300 text-sm">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-blue-100">{corporate.heading}</h3>
              <ul className="space-y-1">
                {corporate.links.map((link) => (
                  <li key={link}>
                    <Link to={'/'} className="hover:text-blue-300 text-sm">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-blue-100">{otherLinks.heading}</h3>
              <ul className="space-y-1">
                {otherLinks.links.map((link) => (
                  <li key={link}>
                    <Link to={'/'} className="hover:text-blue-300 text-sm">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-blue-400 pt-6 text-center text-sm text-blue-200">
          <p>{copyright}</p>
        </div>
        <div className="mt-2 text-xs text-blue-300  max-w-full text-justify mx-auto">
          {disclaimer}
        </div>
      </div>
    </footer>
  )
}
export default Footer
