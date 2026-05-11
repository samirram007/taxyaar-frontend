import React from 'react'
import { Button } from './button'
import { useRouter } from '@tanstack/react-router'

interface CancelButtonProps {
  to?: string
  onClick?: () => void
  text?: string
  className?: string
}

export const CancelButton: React.FC<CancelButtonProps> = ({
  to,
  onClick,
  text = 'CANCEL',
  className = '',
}) => {
  const router = useRouter()

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (to) {
      router.navigate({ to })
    }
  }

  return (
    <Button
      variant="outline"
      onClick={handleClick}
      className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded ${className}`}
    >
      {text}
    </Button>
  )
}
