import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'


import TanstackQueryLayout from '../integrations/tanstack-query/layout'

import { NavigationProgress } from '@/components/web/navigation-progress'
import type { MyRouterContext } from '@/core/contexts/MyRouterContext'
import GeneralError from '@/features/errors/general-error'
import NotFoundError from '@/features/errors/not-found-error'


export const Route = createRootRouteWithContext<MyRouterContext>()({

  component: () => (
    <>
      <NavigationProgress />
      <Outlet />
      <TanstackQueryLayout />
    </>
  ),

  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
})
