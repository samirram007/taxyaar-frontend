import { LayoutProvider } from '@/core/contexts/layout-context';
import ProtectedLayout from '@/layouts/ProtectedLayout';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_protected')({
  beforeLoad: async ({ context }) => {
    if (!context.auth?.isAuthenticated) {
      throw redirect({ to: '/' });

      //return <SignIn />
      // throw new Error('Not authenticated')
    }
  },
  // errorComponent: ({ error }) => {
  //   console.log(error, "validation")
  //   if (error.message === 'Not authenticated') {
  //     return <SignIn />
  //   }

  //   throw error
  // },
  component: () =>
    <LayoutProvider defaultLayout="protected" storageKey="app-ui-layout">
      <ProtectedLayout />
    </LayoutProvider>,
  notFoundComponent: () => <div>Authenticated Not Found</div>,
})


