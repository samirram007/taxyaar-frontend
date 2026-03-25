
import BankDetails from '@/features/wizard-module/pages/bank_details'


import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_protected/_filer/bank_details/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <BankDetails />
}
