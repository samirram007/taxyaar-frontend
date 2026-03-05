import { Card } from '@/components/ui/card'
import AuthLayout from '../auth-layout'
import { UserAuthForm } from './components/user-auth-form'
import { GoogleSignInButton } from '../components/google-sign-in-button'
import { Link } from '@tanstack/react-router'

export default function SignIn() {
  return (
    <AuthLayout>
      <Card className="p-4">
        <div className="flex flex-col space-y-2 text-left">
          <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and password below <br />
            to log into your account
          </p>
        </div>
        <UserAuthForm />

        <GoogleSignInDivider />

        <GoogleSignInButton />

        <p className="mt-2 px-4 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link
            to="/sign-up"
            className="underline underline-offset-4 hover:text-primary"
          >
            Sign Up
          </Link>
        </p>

        <p className="mt-2 px-4 text-center text-sm text-muted-foreground">
          By clicking login, you agree to our{' '}
          <a
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </a>
          .
        </p>
      </Card>
    </AuthLayout>
  )
}

const GoogleSignInDivider = () => {
  return (
    <div className="my-2 grid grid-cols-[1fr_10px_1fr] gap-2 items-center justify-center">
      <div className="h-px bg-muted" />
      <div className="text-sm font-medium text-muted-foreground">Or</div>
      <div className="h-px flex-1 bg-muted" />
    </div>
  )
}
