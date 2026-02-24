import ProductLaunchboard from '@/features/product_launchboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
    '/_protected/product_launchboard',
)({
    component: RouteComponent,
})

function RouteComponent() {
    return <ProductLaunchboard />
}
