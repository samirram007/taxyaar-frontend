import Page from '@/features/wizard-module/pages/foreign_cash_value_insurance/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/_filer/foreign_cash_value_insurance/add' as any,
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
