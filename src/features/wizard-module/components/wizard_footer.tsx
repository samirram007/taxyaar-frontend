// import { useWizardModule } from '../contexts/wizard_module-context'

// import { useRouter } from '@tanstack/react-router';

// import { Route as DashboardRoute } from '@/routes/_protected/_filer/dashboard'
import { MoveLeft, MoveRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { IconClock } from '@tabler/icons-react'

type WizardFooterProps = {
  previousPageLink: string
  previousPageName?: string
  nextPageLink: string
  nextPageName?: string
  progress?: {
    percentage: string
    remaining: string
  }
}

const WizardFooter = (props: WizardFooterProps) => {
  const { previousPageLink, nextPageLink, previousPageName, nextPageName, progress } =
    props
  return (
    <div className="bg-slate-300/20 px-4 py-2 w-full lg:col-span-2 ">


      <div className="flex justify-between items-center gap-4">
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
      {progress && (
        <div className="animate-slide-left flex flex-row justify-end items-center gap-2  text-xs text-muted-foreground">
          <div>{progress.percentage} completed</div>
          <IconClock className="h-4 w-4 text-gray-500" />
          <div>{progress.remaining} remaining</div>
        </div>
      )}
    </div>
  )
}

export default WizardFooter
