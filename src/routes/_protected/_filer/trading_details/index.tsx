import Page from '@/features/wizard-module/pages/trading_details'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/trading_details/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
