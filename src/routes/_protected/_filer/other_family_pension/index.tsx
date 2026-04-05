import Page from '@/features/wizard-module/pages/other_family_pension'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/other_family_pension/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
