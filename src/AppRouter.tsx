// AppRouter.tsx
import { RouterProvider } from '@tanstack/react-router';
import LoadingBar from 'react-top-loading-bar';
import { useAuth } from './features/auth/contexts/AuthContext';
import * as TanstackQuery from './integrations/tanstack-query/root-provider';
import { createAppRouter } from './router';
import { useLayout } from './core/contexts/layout-context';


const router = createAppRouter()
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
        context: {
            auth: ReturnType<typeof useAuth>;
            layout: ReturnType<typeof useLayout>;
            queryClient: ReturnType<typeof TanstackQuery.getContext>['queryClient'];

        };
    }
}

export function AppRouter() {
    const auth = useAuth();
    const { queryClient } = TanstackQuery.getContext();
    const layout = useLayout();
    if (auth.isLoading) return <LoadingBar />;
    if (auth.isLoading) {
        return (
            <div className="flex h-screen w-full items-center justify-center p-4">
                <div className="size-10 rounded-full border-4 border-gray-200 border-t-foreground animate-spin" />
            </div>
        )
    }

    return (
        <RouterProvider
            router={router}
            context={{
                auth,
                layout,
                queryClient,
            }}
        />
    );
}
