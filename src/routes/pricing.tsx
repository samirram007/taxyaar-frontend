import Pricing from '@/features/wizard-module/pages/pricing'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/pricing')({
  component: RouteComponent,
})

function RouteComponent() {
  useEffect(() => {
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

    return () => {}
  }, [])

  return <Pricing />
}
