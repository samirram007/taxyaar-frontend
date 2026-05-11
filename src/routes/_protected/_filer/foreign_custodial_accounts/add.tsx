import Page from '@/features/wizard-module/pages/foreign_custodial_accounts/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/_filer/foreign_custodial_accounts/add' as any,
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
