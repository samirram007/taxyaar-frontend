import LossesAdd from '@/features/wizard-module/pages/losses/add'



import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/losses/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LossesAdd />
}
