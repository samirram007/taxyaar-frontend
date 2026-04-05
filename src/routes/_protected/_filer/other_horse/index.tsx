import Page from '@/features/wizard-module/pages/other_horse'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/other_horse/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
