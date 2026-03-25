
import SeventhProvision from '@/features/wizard-module/pages/seventh_provision'


import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_protected/_filer/seventh_provision/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <SeventhProvision />
}
