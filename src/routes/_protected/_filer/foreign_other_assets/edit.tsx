import { createFileRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/_filer/foreign_other_assets/edit',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
