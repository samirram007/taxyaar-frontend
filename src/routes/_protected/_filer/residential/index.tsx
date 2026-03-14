
import { createFileRoute } from '@tanstack/react-router'
import Residencial from '@/features/wizard-module/pages/residential';



export const Route = createFileRoute('/_protected/_filer/residential/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Residencial />
}
