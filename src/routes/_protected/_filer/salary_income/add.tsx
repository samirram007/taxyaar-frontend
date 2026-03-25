import SalaryIncomeAdd from '@/features/wizard-module/pages/salary_income/add'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/salary_income/add')({
    component: RouteComponent,
})

function RouteComponent() {
    return <SalaryIncomeAdd />
}
