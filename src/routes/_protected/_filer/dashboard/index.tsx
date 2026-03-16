import Dashboard from '@/features/wizard-module/pages/dashboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/dashboard/')({
  beforeLoad: async () => {
    await sessionStorage.removeItem("taxFilerData")
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <Dashboard />
}
