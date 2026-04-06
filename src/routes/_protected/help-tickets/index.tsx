import HelpTickets from '@/features/wizard-module/pages/help-tickets'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/help-tickets/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <HelpTickets />
}
