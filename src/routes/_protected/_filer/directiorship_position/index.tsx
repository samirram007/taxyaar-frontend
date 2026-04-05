import Page from '@/features/wizard-module/pages/directiorship_position'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/directiorship_position/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
