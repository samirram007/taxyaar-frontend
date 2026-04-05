import TaxFiler from '@/features/wizard-module/pages/taxfiler'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/assessee/add/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <><TaxFiler /></>
}
