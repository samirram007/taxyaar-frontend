import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react';
import React, { Suspense } from 'react'

const SettingPage = React.lazy(() => import("@/features/wizard-module/pages/settings"));

export const Route = createFileRoute('/_protected/_filer/settings/_layout/')({
    component: () => {
        return (
            <Suspense fallback={<Loader className='animate-spin' />}>
                <SettingPage />
            </Suspense>
        )
    }
})
