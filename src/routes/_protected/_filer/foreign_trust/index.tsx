import Page from '@/features/wizard-module/pages/foreign_trust'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/foreign_trust/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
