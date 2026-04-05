import Page from '@/features/wizard-module/pages/members'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/members/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
