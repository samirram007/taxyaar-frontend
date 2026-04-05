import Page from '@/features/wizard-module/pages/form10ie_details'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/form10ie_details/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
