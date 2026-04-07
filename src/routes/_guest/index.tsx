import Home from '@/features/home'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/_guest/')({
  beforeLoad: async ({ context }) => {
    if (context.auth?.isAuthenticated) {
      throw redirect({ to: '/product_launchboard' })
    }
  },
  component: RouteComponent,
})


function RouteComponent() {
  useEffect(() => {
    //HeadCSS()
  }, [])

  return (
    <>

      <main className="body c-home-w">
        <Home />
      </main>

    </>
  )
}
export const HeadCSS = () => {
  const files = [
    '/css/bootstrap.min.css',
    '/css/font-awesome.min.css',
    '/css/custom.css',
    '/css/responsive.css',
  ]

  files.forEach((href) => {
    // Remove old one if exists
    document
      .querySelectorAll(`link[href="${href}"]`)
      .forEach((el) => el.remove())

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href + '?t=' + Date.now() // cache bust
    document.head.appendChild(link)
  })

  return null
}
