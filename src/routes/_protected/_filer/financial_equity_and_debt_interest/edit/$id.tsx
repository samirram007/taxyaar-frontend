import Page from '@/features/wizard-module/pages/financial_equity_and_debt_interest/edit'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/_filer/financial_equity_and_debt_interest/edit/$id',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
