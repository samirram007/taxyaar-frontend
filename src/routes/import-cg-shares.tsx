import ImportCGShares from '@/features/wizard-module/pages/import-cg-shares'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/import-cg-shares')({
  validateSearch: (search: Record<string, unknown>) => {
    const brokerIdRaw = search.brokerId
    const brokerIdNum = Number(brokerIdRaw)

    return {
      brokerId:
        Number.isFinite(brokerIdNum) && brokerIdNum > 0
          ? brokerIdNum
          : undefined,
    }
  },
  beforeLoad: async ({ context }) => {
    if (!context.auth?.isAuthenticated) {
    }
  },
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
  return <ImportCGShares />
}
