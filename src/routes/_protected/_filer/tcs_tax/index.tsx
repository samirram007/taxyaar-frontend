



import TcsTax from '@/features/wizard-module/pages/tcs_tax'
import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_protected/_filer/tcs_tax/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <TcsTax />
}
