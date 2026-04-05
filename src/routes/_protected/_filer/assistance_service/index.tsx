import Page from '@/features/wizard-module/pages/assistance_service'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/assistance_service/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
