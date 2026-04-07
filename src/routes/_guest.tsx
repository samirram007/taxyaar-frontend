import GuestLayout from '@/layouts/GuestLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_guest')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <GuestLayout />
  )
}
