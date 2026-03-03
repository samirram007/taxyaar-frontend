import { DepartmentAddClientPage } from '@/features/wizard-module/pages/department_add_client'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/(filer)/department_add_client/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <DepartmentAddClientPage />
}
