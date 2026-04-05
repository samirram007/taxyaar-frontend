import Page from '@/features/wizard-module/pages/other_casual_income/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/other_casual_income/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
