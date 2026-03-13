
import SeventhProviso from '@/features/wizard-module/pages/seventh_proviso'


import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_protected/_filer/seventh_proviso/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <SeventhProviso />
}
