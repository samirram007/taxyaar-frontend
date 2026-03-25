import ReliefForeignAdd from '@/features/wizard-module/pages/relief_foreign/add'


import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/relief_foreign/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ReliefForeignAdd />
}
