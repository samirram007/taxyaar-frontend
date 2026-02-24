import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/(filer)/assessee/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/(filer)/assessee/edit"!</div>
}
