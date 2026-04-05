import Page from '@/features/wizard-module/pages/taxfiler'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/taxfiler/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
