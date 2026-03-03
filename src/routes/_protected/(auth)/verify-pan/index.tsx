import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/(auth)/verify-pan/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/auth/verify-pan/"!</div>
}
