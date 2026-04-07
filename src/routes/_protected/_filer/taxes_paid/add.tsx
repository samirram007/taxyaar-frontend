
import TaxesPaidAdd from '@/features/wizard-module/pages/taxes_paid/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/taxes_paid/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TaxesPaidAdd />
}
