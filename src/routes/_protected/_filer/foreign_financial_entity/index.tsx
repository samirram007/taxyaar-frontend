import Page from '@/features/wizard-module/pages/foreign_financial_entity'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/foreign_financial_entity/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
