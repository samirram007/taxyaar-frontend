import Page from '@/features/wizard-module/pages/capital_gain_security/import_capital_gain_transactions_for_tax_filing'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/capital_gain_security/import_capital_gain_transactions_for_tax_filing')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
