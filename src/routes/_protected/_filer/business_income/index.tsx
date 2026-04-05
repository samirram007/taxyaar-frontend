
import Page from '@/features/wizard-module/pages/business_income'



import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_protected/_filer/business_income/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Page />
}
