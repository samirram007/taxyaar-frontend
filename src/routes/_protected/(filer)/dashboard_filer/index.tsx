import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/(filer)/dashboard_filer/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/(filer)/dashboard_filer/"!</div>
}
