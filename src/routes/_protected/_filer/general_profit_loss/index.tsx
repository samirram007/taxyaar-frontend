import Page from '@/features/wizard-module/pages/general_profit_loss'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/general_profit_loss/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
