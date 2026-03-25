import AgricultureIncomeAdd from '@/features/wizard-module/pages/agriculture_income/add'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/allowance_breakup/add')({
    component: RouteComponent,
})

function RouteComponent() {
    return <AgricultureIncomeAdd />
}
