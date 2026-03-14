
import TaxesStart from '@/features/wizard-module/pages/taxes_start'

import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_protected/_filer/taxes_start/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <TaxesStart />
}
