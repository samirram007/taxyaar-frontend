import { createFileRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/_filer/foreign_immovable_property/edit',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
