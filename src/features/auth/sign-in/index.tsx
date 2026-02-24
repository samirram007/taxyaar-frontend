import { Card } from '@/components/ui/card'
import AuthLayout from '../auth-layout'
import { UserAuthForm } from './components/user-auth-form'
import { Button } from '@/components/ui/button'
import { useRouter } from '@tanstack/react-router'



export default function SignIn() {

  return (
    <AuthLayout>
      <Card className='p-6'>
        <div className='flex flex-col space-y-2 text-left'>
          <h1 className='text-2xl font-semibold tracking-tight'>Login</h1>
          <p className='text-sm text-muted-foreground'>
            Enter your email and password below <br />
            to log into your account
          </p>
        </div>
        <UserAuthForm />
        <GoogleSignIn />
        <SignInWithGoogle />
        <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
          By clicking login, you agree to our{' '}
          <a
            href='/terms'
            className='underline underline-offset-4 hover:text-primary'
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href='/privacy'
            className='underline underline-offset-4 hover:text-primary'
          >
            Privacy Policy
          </a>
          .
        </p>
      </Card>
    </AuthLayout>
  )
}

const GoogleSignIn = () => {
  return (
    <div className='grid grid-cols-[1fr_10px_1fr] gap-2 items-center justify-center space-x-2'>
      <div className='h-px  bg-muted' />
      <div className='text-sm font-medium text-muted-foreground'>Or</div>
      <div className='h-px flex-1 bg-muted' />
    </div>
  )
}

const SignInWithGoogle = () => {
  const router = useRouter()


  const handleClick = async () => {
    try {
      const googleAuthUrl = `${import.meta.env.VITE_API_BASE_URL}/auth/google`
      window.location.href = googleAuthUrl
    } catch (error) {
      console.error('Google Sign-In failed:', error)
      // Handle error (e.g., show a notification to the user)
    }


  }


  return (
    <Button
      type='button'
      className='inline-flex w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm shadow-sm text-slate-700 transition hover:bg-accent focus:outline-none'
      onClick={handleClick}
    >
      <img src='google-icon.svg' alt='Google' className='mr-2 h-5 w-5' />
      <span className='font-medium'>Continue with Google</span>
    </Button>
  )
}
