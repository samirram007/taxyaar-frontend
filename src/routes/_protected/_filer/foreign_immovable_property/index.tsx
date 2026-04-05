import Page from '@/features/wizard-module/pages/foreign_immovable_property'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/foreign_immovable_property/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
