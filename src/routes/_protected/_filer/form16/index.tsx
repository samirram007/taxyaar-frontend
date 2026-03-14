import Form16 from '@/features/wizard-module/pages/form16'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/form16/')({
  component: RouteComponent,
})

function RouteComponent() {
  //get search data from form16 upload page
  //const data = JSON.parse()

  console.log()

  return <Form16 />
}
