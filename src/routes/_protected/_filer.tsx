import WizardModuleProvider from '@/features/wizard-module/contexts/wizard_module-context'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<WizardModuleProvider>
    <Outlet />
  </WizardModuleProvider>)
}
