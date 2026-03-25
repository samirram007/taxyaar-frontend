import TaxReliefAdd from '@/features/wizard-module/pages/tax_relief/add'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/tax_relief/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TaxReliefAdd />
}
