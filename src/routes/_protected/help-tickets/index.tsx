import HelpTickets from '@/features/wizard-module/pages/help-tickets'
import { createFileRoute } from '@tanstack/react-router'

// Load CSS files synchronously before component renders
const loadCSSFiles = () => {
  const files = [
    '/css/bootstrap.min.css',
    '/css/font-awesome.min.css',
    '/css/custom.css',
  ]

  files.forEach((href) => {
    const exists = document.querySelector(`link[href="${href}"]`)
    if (!exists) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      document.head.appendChild(link)
    }
  })
}

// Load CSS before rendering
// loadCSSFiles()

export const Route = createFileRoute('/_protected/help-tickets/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <HelpTickets />
}
