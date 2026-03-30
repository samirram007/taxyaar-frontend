import BankDetailsAdd from '@/features/wizard-module/pages/balance_sheet/add'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/bank_details/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <BankDetailsAdd />
}
