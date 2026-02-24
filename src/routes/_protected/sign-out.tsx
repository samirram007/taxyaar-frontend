import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/sign-out')({
  beforeLoad: async ({ context }) => {
    if (!context.auth?.isAuthenticated) {

      // HeadCSS()
      
    }

  },

  component: RouteComponent,
})

function RouteComponent() {

  return <div>Hello "/_protected/sign-out"!</div>
}
