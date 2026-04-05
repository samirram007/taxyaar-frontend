import Page from '@/features/wizard-module/pages/foreign_other_assets/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/foreign_other_assets/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
