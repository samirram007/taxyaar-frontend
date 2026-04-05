import Page from '@/features/wizard-module/pages/other_horse/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/other_horse/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
