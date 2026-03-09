import SignUp from '@/features/auth/sign-up'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/sign-up')({
  beforeLoad: async ({ context }) => {
    console.log(context.auth?.user, 'context')
    if (context.auth?.user) {
      throw redirect({ to: '/product_launchboard' })
    }
  },
  component: SignUp,
})
