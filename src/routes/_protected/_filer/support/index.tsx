import Page from '@/features/wizard-module/pages/support'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/support/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
