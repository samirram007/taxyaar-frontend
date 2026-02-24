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
  component: ProtectedLayout,
  notFoundComponent: () => <div>Authenticated Not Found</div>,
})


