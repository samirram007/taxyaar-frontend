import { Main } from '@/layouts/components/main'
import CustomBreadcrumb from '../../components/CustomBreadCrumb'
import SettingCard from './components/setting-card'

export default function Settings() {
  return (
    <Main className="min-w-full">
      <CustomBreadcrumb title="Settings" />
      <div className="my-5" />
      <div className="flex justify-center w-full px-4 mb-20">
        <SettingCard />
      </div>
    </Main>
  )
}
