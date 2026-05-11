import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/_filer/financial_equity_and_debt_interest/edit',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
