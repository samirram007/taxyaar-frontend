

import TdsTax from '@/features/wizard-module/pages/tds_tax'

import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_protected/_filer/tds_tax/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <TdsTax />
}
