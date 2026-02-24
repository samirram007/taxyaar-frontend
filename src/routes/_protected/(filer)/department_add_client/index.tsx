import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/(filer)/department_add_client/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/(filer)/department_add_client/"!</div>
}
