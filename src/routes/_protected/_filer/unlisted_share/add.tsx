import Page from '@/features/wizard-module/pages/unlisted_share/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/unlisted_share/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
