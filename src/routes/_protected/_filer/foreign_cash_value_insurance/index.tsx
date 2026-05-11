import Page from '@/features/wizard-module/pages/foreign_cash_value_insurance'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/_filer/foreign_cash_value_insurance/' as any,
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
