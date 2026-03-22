
import ContactDetails from '@/features/wizard-module/pages/contact_details'


import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/_protected/_filer/contact_details/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <ContactDetails />
}
