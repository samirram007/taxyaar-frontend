import Page from '@/features/wizard-module/pages/family_income/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/family_income/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
