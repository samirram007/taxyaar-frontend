import type { AuthContextType } from '@/features/auth/contexts/AuthContext';
import { QueryClient } from '@tanstack/react-query';
import type { LayoutContextType } from './layout-context';


export interface MyRouterContext {
    queryClient: QueryClient;
    auth: AuthContextType;
    layout: LayoutContextType;
}