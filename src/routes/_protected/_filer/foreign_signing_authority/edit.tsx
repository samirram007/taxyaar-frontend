import { createFileRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/_filer/foreign_signing_authority/edit',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
