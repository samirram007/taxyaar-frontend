import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/(auth)/addtaxform/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/auth/addtaxform/"!</div>
}
