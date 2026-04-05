import Page from '@/features/wizard-module/pages/exempt_income/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/exempt_income/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
