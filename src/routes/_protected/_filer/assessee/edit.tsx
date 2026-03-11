import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/assessee/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello</div>
}
