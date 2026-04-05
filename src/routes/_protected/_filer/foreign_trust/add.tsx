import Page from '@/features/wizard-module/pages/foreign_trust/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/foreign_trust/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
