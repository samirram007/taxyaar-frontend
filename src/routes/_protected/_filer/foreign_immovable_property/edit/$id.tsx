import Page from '@/features/wizard-module/pages/foreign_immovable_property/edit'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/_filer/foreign_immovable_property/edit/$id',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
