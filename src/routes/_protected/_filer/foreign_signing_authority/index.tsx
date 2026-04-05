import Page from '@/features/wizard-module/pages/foreign_signing_authority'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/foreign_signing_authority/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
