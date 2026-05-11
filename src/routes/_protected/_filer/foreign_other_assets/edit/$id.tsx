import Page from '@/features/wizard-module/pages/foreign_other_assets/edit'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/_filer/foreign_other_assets/edit/$id',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
