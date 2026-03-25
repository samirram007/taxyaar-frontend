import AgricultureIncomeAdd from '@/features/wizard-module/pages/agriculture_income/add'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/agriculture_income/add')({
    component: RouteComponent,
})

function RouteComponent() {
    return <AgricultureIncomeAdd />
}
