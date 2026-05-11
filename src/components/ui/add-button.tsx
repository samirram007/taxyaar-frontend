import React from 'react'
import { Button } from './button'
import { Link } from '@tanstack/react-router'

interface AddButtonProps {
  to: string
  text?: string
  className?: string
}

export const AddButton: React.FC<AddButtonProps> = ({
  to,
  text = '+ ADD',
  className = '',
}) => {
  return (
    <Button
      asChild
      className={`bg-teal-600 hover:bg-teal-700 transition-all duration-200 ease-out hover:shadow-lg hover:-translate-y-px active:scale-[0.97] cursor-pointer ${className}`}
    >
      <Link to={to} className="text-white">
        {text}
      </Link>
    </Button>
  )
}
