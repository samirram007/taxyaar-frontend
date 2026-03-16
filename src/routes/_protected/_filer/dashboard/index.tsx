import { clientQueryOptions } from '@/features/wizard-module/pages/taxfiler/data/queryOptions';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { Loader } from 'lucide-react';
import React, { Suspense } from 'react';

const Dashboard = React.lazy(() => import('@/features/wizard-module/pages/dashboard/index'));

export const Route = createFileRoute('/_protected/_filer/dashboard/')({
  loader: ({ context }) => context.queryClient.ensureQueryData(clientQueryOptions()),
  component: () => {
    const { data: members } = useSuspenseQuery(clientQueryOptions())

    return (
      <Suspense fallback={<Loader className='animate-spin' />}>
        <Dashboard data={members.data} />
      </Suspense>
    )
  },
  errorComponent: () => <div>Error loading supplier data...</div>,
  pendingComponent: () => <Loader className='amimate-spin' />
});