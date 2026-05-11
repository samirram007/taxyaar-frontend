import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/_filer/foreign_cash_value_insurance/edit',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
