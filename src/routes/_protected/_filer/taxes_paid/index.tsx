



import TaxesPaid from '@/features/wizard-module/pages/taxes_paid'
import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_protected/_filer/taxes_paid/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <TaxesPaid />
}
