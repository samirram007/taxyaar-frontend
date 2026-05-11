import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/foreign_trust/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
