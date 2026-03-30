
import { createFileRoute } from '@tanstack/react-router'


import BalanceSheet from '@/features/wizard-module/pages/balance_sheet';



export const Route = createFileRoute('/_protected/_filer/balance_sheet/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <BalanceSheet />
}
