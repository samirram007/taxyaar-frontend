import { cn } from '@/lib/utils'
import { IconCheck, IconLayout, IconLayout2, IconLayoutAlignLeft, IconMoon, IconSun } from '@tabler/icons-react'


import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLayout } from '@/core/contexts/layout-context'

export function LayoutSwitch() {
  const { layoutType, setLayoutType } = useLayout()

  /* Update theme-color meta tag
   * when theme is updated */


  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='scale-95 rounded-full'>

          <IconLayout className='size-[1.2rem] text rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <IconLayoutAlignLeft className='absolute size-[1.2rem] text-violet-700 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setLayoutType('protected')}>
          Protected {' '}
          <IconLayout
            size={14}
            className={cn('ml-auto', layoutType !== 'protected' && 'hidden')}
          />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLayoutType('protectedWeb')}>
          Protected Web
          <IconLayoutAlignLeft
            size={14}
            className={cn('ml-auto', layoutType !== 'protectedWeb' && 'hidden')}
          />
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
