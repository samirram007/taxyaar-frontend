
import OtherDetailsStart from '@/features/wizard-module/pages/other_details_start'


import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_protected/_filer/other_details_start/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <OtherDetailsStart />
}
