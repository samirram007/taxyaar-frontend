
import TaxPaid from '@/features/wizard-module/pages/tax_paid'

import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_protected/_filer/tax_paid/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <TaxPaid />
}
