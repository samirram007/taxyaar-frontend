// import { useWizardModule } from '../contexts/wizard_module-context'

// import { routeTree } from "@/routeTree.gen"
import { IconClock } from '@tabler/icons-react'
import { Link, useNavigate } from '@tanstack/react-router'
import { MoveLeft, MoveRight } from 'lucide-react'

// import { useRouter } from '@tanstack/react-router';

// import { Route as DashboardRoute } from '@/routes/_protected/_filer/dashboard'
// import { MoveLeft, MoveRight } from 'lucide-react'
// import { Link } from '@tanstack/react-router'
// import { IconClock } from '@tabler/icons-react'

type WizardFooterProps = {
  indicatorTextLeft?: string
  indicatorTextRight?: string
  previousPageLink: string
  previousPageName?: string
  nextPageLink: string
  nextPageName?: string
  progress?: {
    percentage: string
    remaining: string
  }
  validated?: () => boolean
}

const WizardFooter = (props: WizardFooterProps) => {
  const {
    previousPageLink,
    nextPageLink,
    previousPageName,
    nextPageName,
    progress,
    validated,
  } = props
  const navigate = useNavigate()

  const handleLinkClick = (link: string) => {
    if (validated && !validated()) {
      return
    }
    navigate({ to: link })

    // You can add any additional logic here if needed before navigation
    // For example, you could log the navigation or perform some checks
  }
  return (
    <div className="bg-slate-300/20 px-4 py-2 w-full lg:col-span-2 ">
      <div className="flex justify-between items-center gap-4">
        <div>
          <div>{props.indicatorTextLeft || 'Previous'}</div>
          <div className="flex flex-row gap-2 items-center">
            <Link
              to={previousPageLink}
              className="flex flex-row gap-1 items-center"
              onClick={() => handleLinkClick(previousPageLink)}
            >
              <MoveLeft /> {previousPageName || 'Previous Page'}
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div>{props.indicatorTextRight || 'Next'}</div>
          <div className="flex flex-row text-xl text-sky-600 cursor-pointer ">
            <Link
              to={nextPageLink}
              className="flex flex-row gap-1 items-center"
              onClick={() => handleLinkClick(nextPageLink)}
            >
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
