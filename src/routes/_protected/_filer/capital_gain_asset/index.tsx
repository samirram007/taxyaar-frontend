import Page from '@/features/wizard-module/pages/capital_gain_asset'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/capital_gain_asset/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
