import Page from '@/features/wizard-module/pages/other_casual_income'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/other_casual_income/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
