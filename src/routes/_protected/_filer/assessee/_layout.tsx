import ClientProvider from '@/features/wizard-module/contexts/client_context'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/_filer/assessee/_layout')({
    component: () => {
        return (
            <ClientProvider>
                <Outlet />
            </ClientProvider>
        )
    },
})