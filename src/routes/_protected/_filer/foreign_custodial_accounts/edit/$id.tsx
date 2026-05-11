import Page from '@/features/wizard-module/pages/foreign_custodial_accounts/edit'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/_filer/foreign_custodial_accounts/edit/$id',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
