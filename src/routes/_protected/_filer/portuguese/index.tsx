import Page from '@/features/wizard-module/pages/portuguese'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/portuguese/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
