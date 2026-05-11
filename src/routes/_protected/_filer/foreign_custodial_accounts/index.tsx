import Page from '@/features/wizard-module/pages/foreign_custodial_accounts'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/_filer/foreign_custodial_accounts/' as any,
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
