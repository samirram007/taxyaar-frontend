import Page from '@/features/support'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/support/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
