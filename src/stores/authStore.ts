import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthStore {
  token: string | null;
  isLoading: boolean;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: null,
      isLoading: false,
      setToken: (token: string) => set({ token }),
      clearToken: () => set({ token: null }),
    }),
    { name: 'auth-token-storage' }
  )
);
