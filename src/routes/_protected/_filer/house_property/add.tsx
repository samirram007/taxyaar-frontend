import HousePropertyAdd from '@/features/wizard-module/pages/house_property/add'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/house_property/add')({
    component: RouteComponent,
})

function RouteComponent() {
    return <HousePropertyAdd />
}
