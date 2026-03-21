
import { createFileRoute } from '@tanstack/react-router'
import DeductionStart from '@/features/wizard-module/pages/deduction_start';



export const Route = createFileRoute('/_protected/_filer/deduction_start/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <DeductionStart />
}
