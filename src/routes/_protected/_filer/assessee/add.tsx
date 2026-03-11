import AddTaxForm from '@/features/wizard-module/pages/addtask/components/addtaxform'
// import MembersPage from '@/features/wizard-module/pages/members'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/assessee/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AddTaxForm />
}
