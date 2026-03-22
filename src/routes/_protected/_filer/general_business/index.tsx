
import { createFileRoute } from '@tanstack/react-router'
import GeneralBusiness from '@/features/wizard-module/pages/general_business';



export const Route = createFileRoute('/_protected/_filer/general_business/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <GeneralBusiness />
}
