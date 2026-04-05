import Page from '@/features/wizard-module/pages/foreign_signing_authority/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/foreign_signing_authority/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
