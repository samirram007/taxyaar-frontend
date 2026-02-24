import MembersPage from '@/features/wizard-module/pages/members'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/(filer)/assessee/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MembersPage />
}
