import Start from '@/features/wizard-module/pages/start'
import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_protected/(filer)/start/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Start />
}
