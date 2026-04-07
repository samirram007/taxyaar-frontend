import TcsTaxAdd from '@/features/wizard-module/pages/tcs_tax/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/tcs_tax/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TcsTaxAdd />
}
