import ChooseRegime from '@/features/wizard-module/pages/choose_regime'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/choose_regime/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ChooseRegime />
}
