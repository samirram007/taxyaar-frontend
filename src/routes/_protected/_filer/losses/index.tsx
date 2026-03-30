



import Losses from '@/features/wizard-module/pages/losses'



import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_protected/_filer/losses/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Losses />
}
