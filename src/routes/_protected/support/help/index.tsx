import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/support/help/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/support/help/"!</div>
}
