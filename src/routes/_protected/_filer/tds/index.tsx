
import Tds from '@/features/wizard-module/pages/tds'
import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_protected/_filer/tds/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Tds />
}
