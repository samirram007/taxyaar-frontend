import { useAuth } from '@/features/auth/contexts/AuthContext';
import { clientQueryOptions } from '@/features/wizard-module/pages/taxfiler/data/queryOptions';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, redirect } from '@tanstack/react-router'
import { Loader } from 'lucide-react';
import React, { Suspense } from 'react';

const EditTaxFiler = React.lazy(() => import("@/features/wizard-module/pages/taxfiler/"));

export const Route = createFileRoute('/_protected/_filer/assessee/edit/')({
    loader: ({ context }) => {
        const pan = context.auth.currentClient?.pan;
        if (!pan) {
            throw redirect({
                to: '/dashboard',
            })
        };

        return context.queryClient.ensureQueryData(
            clientQueryOptions(pan)
        );
    },

    component: () => {
        const { currentClient } = useAuth();
        const { data: client } = useSuspenseQuery(clientQueryOptions(currentClient?.pan));


        return (
            <Suspense>
                <EditTaxFiler data={client.data} />
            </Suspense>
        );
    },

    pendingComponent: () => <Loader className="animate-spin" />,
    errorComponent: () => <div>Error loading Client data...</div>,
});