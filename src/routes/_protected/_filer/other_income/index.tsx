
import { createFileRoute } from '@tanstack/react-router'
import OtherIncome from '@/features/wizard-module/pages/other_income';



export const Route = createFileRoute('/_protected/_filer/other_income/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <OtherIncome />
}
