import { Card } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'
import AuthLayout from '../auth-layout'
import { SignUpForm } from './components/sign-up-form'
import { GoogleSignInButton } from '../components/google-sign-in-button'

export default function SignUp() {
  return (
    <AuthLayout>
      <Card className="p-4">
        <div className="mb-2 flex flex-col space-y-1 text-left">
          <h1 className="text-lg font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and password to create an account. <br />
            Already have an account?{' '}
            <Link
              to="/sign-in"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign In
            </Link>
          </p>
        </div>
        <SignUpForm />

        <GoogleSignInButton />

        <p className="mt-2 px-4 text-center text-sm text-muted-foreground">
          By creating an account, you agree to our{' '}
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
