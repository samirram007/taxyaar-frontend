import Page from '@/features/wizard-module/pages/import-cg-shares'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/import-cg-shares-protected/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
