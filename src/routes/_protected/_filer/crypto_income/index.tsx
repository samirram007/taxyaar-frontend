import Page from '@/features/wizard-module/pages/crypto_income'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/crypto_income/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
