import TdsTaxAdd from '@/features/wizard-module/pages/tds_tax/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/tds_tax/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TdsTaxAdd />
}
