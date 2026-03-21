
import { createFileRoute } from '@tanstack/react-router'
import HouseProperty from '@/features/wizard-module/pages/house_property';



export const Route = createFileRoute('/_protected/_filer/house_property/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <HouseProperty />
}
