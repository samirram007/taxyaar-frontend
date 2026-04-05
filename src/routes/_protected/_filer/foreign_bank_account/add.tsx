import Page from '@/features/wizard-module/pages/foreign_bank_account/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/foreign_bank_account/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
