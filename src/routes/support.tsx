import Support from '@/features/wizard-module/pages/support'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/support')({
  component: RouteComponent,
})

function RouteComponent() {
  useEffect(() => {
    const files = [
      '/css/bootstrap.min.css',
      '/css/font-awesome.min.css',
      '/css/custom.css',
      '/css/responsive.css',
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

    return () => {}
  }, [])

  return <Support />
}
