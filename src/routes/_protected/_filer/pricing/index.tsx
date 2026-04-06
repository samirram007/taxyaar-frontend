import Page from '@/features/pricing'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/pricing/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
