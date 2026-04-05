import Page from '@/features/wizard-module/pages/foreign_bank_account'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/foreign_bank_account/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
