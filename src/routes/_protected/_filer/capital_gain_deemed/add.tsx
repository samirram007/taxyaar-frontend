import Page from '@/features/wizard-module/pages/capital_gain_deemed/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/capital_gain_deemed/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
