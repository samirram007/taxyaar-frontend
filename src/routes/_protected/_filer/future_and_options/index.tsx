import Page from '@/features/wizard-module/pages/future_and_options'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/future_and_options/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
