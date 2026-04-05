import Page from '@/features/wizard-module/pages/general_profit_loss/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/general_profit_loss/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
