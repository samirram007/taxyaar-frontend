import { cn } from '@/lib/utils'
import React from 'react'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  fixed?: boolean
  ref?: React.Ref<HTMLElement>
}

export const Header = ({
  className,
  fixed,
  children,
  ...props
}: HeaderProps) => {
  const [offset, setOffset] = React.useState(0)

  React.useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffset(document.body.scrollTop || document.documentElement.scrollTop);
          ticking = false;
        });
        ticking = true;
      }
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'flex h-14 items-center gap-3  p-4 sm:gap-4',
        fixed && 'header-fixed peer/header sticky top-0 z-50 w-full',
        offset > 10 && fixed ? 'shadow' : 'shadow-none',
        className
      )}
      {...props}
    >
      {children}
    </header>
  )
}

Header.displayName = 'Header'
