import Documents from '@/features/documents'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/documents/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Documents />
}
