import ChooseReturnType from '@/features/wizard-module/pages/choose_return_type'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/choose_return_type/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ChooseReturnType />
}
