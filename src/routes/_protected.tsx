
import ProtectedLayout from '@/layouts/ProtectedLayout';
import ProtectedWebLayout from '@/layouts/ProtectedWebLayout';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { useLayout } from '@/core/contexts/layout-context';

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
  component: ProtectedRouteComponent,

  notFoundComponent: () => <div>Authenticated Not Found</div>,
})
function ProtectedRouteComponent() {
  const { layoutType } = useLayout()

  switch (layoutType) {
    case 'protected':
      return <ProtectedLayout />

    case 'protectedWeb':
      return <ProtectedWebLayout />
    default:
      return <ProtectedLayout /> // fallback
  }
}


