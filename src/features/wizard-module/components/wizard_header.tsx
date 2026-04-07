

import { useAuth } from '@/features/auth/contexts/AuthContext'
import { useWizardModule } from '../contexts/wizard_module-context'

// import { useRouter } from '@tanstack/react-router';


import { Route as DashboardRoute } from '@/routes/_protected/_filer/dashboard'
import { useRouter } from '@tanstack/react-router'



const WizardHeader = () => {
    const router = useRouter()
    const { member } = useWizardModule()
    const { userFiscalYear } = useAuth();
    const assessmentYear = userFiscalYear?.fiscalYear.assessmentYear;

    console.log("fiscal year:", userFiscalYear?.fiscalYear.assessmentYear);

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