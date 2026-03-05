import { GoogleLogin } from '@react-oauth/google'
import { useRouter } from '@tanstack/react-router'
import { useAuth } from '../contexts/AuthContext'
import { toast } from 'sonner'

interface GoogleSignInButtonProps {
  onSuccess?: () => void
  onError?: (error: any) => void
}

export function GoogleSignInButton({
  onSuccess,
  onError,
}: GoogleSignInButtonProps) {
  const { googleLogin } = useAuth()
  const router = useRouter()

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      console.log('G auth - starting')
      await googleLogin(credentialResponse.credential)
      console.log('G auth - success')
      toast.success('Authenticated successfully!')
      await router.invalidate()
      router.navigate({ to: '/dashboard' })

      onSuccess?.()
    } catch (error: any) {
      console.error('G auth error:', error)

      const errorMessage = error.response?.data?.message || error.message

      toast.error(errorMessage || 'Authentication failed')

      onError?.(error)
    }
  }

  return (
    <div className="w-full">
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={() => {
          toast.error('Google authentication failed')
          onError?.(new Error('Google authentication failed'))
        }}
        text="signin_with"
      />
    </div>
  )
}
