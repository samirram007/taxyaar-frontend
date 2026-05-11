import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/_filer/foreign_other_income/edit',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
