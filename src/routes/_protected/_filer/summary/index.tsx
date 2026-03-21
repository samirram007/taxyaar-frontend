import Summary from '@/features/wizard-module/pages/summary'
import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_protected/_filer/summary/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Summary />
}
