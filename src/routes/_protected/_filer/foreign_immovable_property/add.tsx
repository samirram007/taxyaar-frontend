import Page from '@/features/wizard-module/pages/foreign_immovable_property/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/foreign_immovable_property/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
