import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/_filer/foreign_signing_authority/edit/$id',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>Hello "/_protected/_filer/foreign_signing_authority/edit/$id"!</div>
  )
}
