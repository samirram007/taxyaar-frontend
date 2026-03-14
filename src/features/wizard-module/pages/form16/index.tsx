import CustomBreadcrumb from '../../components/CustomBreadCrumb'
import Form16Details from './components/Form16Details'

const Form16 = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <CustomBreadcrumb title="Form 16" />
      <main className="max-w-7xl mx-auto px-6 py-10">
        <Form16Details />
      </main>
    </div>
  )
}
export default Form16
