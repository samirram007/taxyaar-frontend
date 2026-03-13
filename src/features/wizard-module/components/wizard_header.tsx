

import { useWizardModule } from '../contexts/wizard_module-context'

import { useRouter } from '@tanstack/react-router';


import { Route as DashboardRoute } from '@/routes/_protected/_filer/dashboard'



const WizardHeader = () => {
    const router = useRouter()
    const { member } = useWizardModule()
    const assessmentYear = "2025-26"

    if (!member) {
        router.navigate({ to: DashboardRoute.path, replace: true });
        return null;
    }
    return (
        <div className="space-x-2 text-sm">
            <span>A. Y. {assessmentYear}</span>
            <span>{member?.firstName + " " + member?.lastName}</span>
            <span>{member?.pan}</span>

        </div>
    )
}

export default WizardHeader