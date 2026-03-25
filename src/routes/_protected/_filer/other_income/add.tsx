import OtherIncomeAdd from '@/features/wizard-module/pages/other_income/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/other_income/add')({
    component: RouteComponent,
})

function RouteComponent() {
    return <OtherIncomeAdd />
}
