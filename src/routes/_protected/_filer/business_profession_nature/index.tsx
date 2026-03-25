
import BusinessProfessionNature from '@/features/wizard-module/pages/business_profession_nature'



import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_protected/_filer/business_profession_nature/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <BusinessProfessionNature />
}
