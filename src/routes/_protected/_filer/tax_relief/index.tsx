



import TaxRelief from '@/features/wizard-module/pages/tax_relief'

import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_protected/_filer/tax_relief/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <TaxRelief />
}
