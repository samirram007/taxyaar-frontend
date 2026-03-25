



import ReliefForeign from '@/features/wizard-module/pages/relief_foreign'


import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_protected/_filer/relief_foreign/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <ReliefForeign />
}
