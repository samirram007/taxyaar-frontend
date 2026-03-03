import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/(auth)/member/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/auth/member/"!</div>
}
