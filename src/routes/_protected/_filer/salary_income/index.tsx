
import { createFileRoute } from '@tanstack/react-router'
import SalaryIncome from '@/features/wizard-module/pages/salary_income';



export const Route = createFileRoute('/_protected/_filer/salary_income/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <SalaryIncome />
}
