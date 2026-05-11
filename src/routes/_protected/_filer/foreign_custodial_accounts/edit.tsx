import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/_filer/foreign_custodial_accounts/edit',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
