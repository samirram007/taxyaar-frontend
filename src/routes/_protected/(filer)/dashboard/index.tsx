import Dashboard from '@/features/wizard-module/pages/dashboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/(filer)/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Dashboard />
}
