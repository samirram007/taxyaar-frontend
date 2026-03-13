// import { useWizardModule } from '../contexts/wizard_module-context'

// import { useRouter } from '@tanstack/react-router';

// import { Route as DashboardRoute } from '@/routes/_protected/_filer/dashboard'
import { MoveLeft, MoveRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

type WizardFooterProps = {
  previousPageLink: string
  previousPageName?: string
  nextPageLink: string
  nextPageName?: string
}

const WizardFooter = (props: WizardFooterProps) => {
  const { previousPageLink, nextPageLink, previousPageName, nextPageName } =
    props
  return (
    <div className="bg-gray-400/20 p-4 w-full lg:col-span-2 flex justify-between items-center gap-4">
      <div>
        <div>Previous</div>
        <div className="flex flex-row gap-2 items-center">
          <Link
            to={previousPageLink}
            className="flex flex-row gap-1 items-center"
          >
            <MoveLeft /> {previousPageName || 'Previous Page'}
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div>Next</div>
        <div className="flex flex-row text-xl text-sky-600 cursor-pointer ">
          <Link to={nextPageLink} className="flex flex-row gap-1 items-center">
            {nextPageName || 'Next Page'} <MoveRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WizardFooter
