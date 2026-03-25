
import { createFileRoute } from '@tanstack/react-router'


import AssetLiability from '@/features/wizard-module/pages/asset_liability';



export const Route = createFileRoute('/_protected/_filer/asset_liability/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <AssetLiability />
}
