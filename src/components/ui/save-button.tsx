import React from 'react'
import { Button } from './button'

interface SaveButtonProps {
  onClick: () => void
  text?: string
  className?: string
}

export const SaveButton: React.FC<SaveButtonProps> = ({
  onClick,
  text = 'SAVE',
  className = '',
}) => {
  return (
    <Button
      onClick={onClick}
      className={`bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded ${className}`}
    >
      {text}
    </Button>
  )
}
