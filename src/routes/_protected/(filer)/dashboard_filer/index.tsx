import DashboardFiler from '@/features/wizard-module/pages/dashboard/dashboard-filer'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/(filer)/dashboard_filer/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DashboardFiler />
}
