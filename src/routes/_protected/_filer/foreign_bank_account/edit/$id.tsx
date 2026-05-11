import Page from '@/features/wizard-module/pages/foreign_bank_account/edit'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/_filer/foreign_bank_account/edit/$id',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
