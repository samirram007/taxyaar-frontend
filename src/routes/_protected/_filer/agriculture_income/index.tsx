
import { createFileRoute } from '@tanstack/react-router'

import AgricultureIncome from '@/features/wizard-module/pages/agriculture_income';



export const Route = createFileRoute('/_protected/_filer/agriculture_income/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <AgricultureIncome />
}
