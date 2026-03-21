
import { createFileRoute } from '@tanstack/react-router'
import Deductions from '@/features/wizard-module/pages/deductions';



export const Route = createFileRoute('/_protected/_filer/deductions/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Deductions />
}
