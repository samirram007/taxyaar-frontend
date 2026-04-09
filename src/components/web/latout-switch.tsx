import { cn } from '@/lib/utils'
import { IconCheck, IconLayout, IconLayoutAlignLeft } from '@tabler/icons-react'


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


  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='scale-95 rounded-full'>
          {layoutType === 'protectedWeb' ? (
            <IconLayoutAlignLeft className='size-[1.2rem] text-violet-200 transition-all' />
          ) : (
            <IconLayout className='size-[1.2rem] text transition-all' />
          )}
          <span className='sr-only'>Switch layout</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onSelect={() => setLayoutType('protected')}>
          <IconLayout size={14} className='mr-2' />
          Protected
          <IconCheck
            size={14}
            className={cn('ml-auto', layoutType !== 'protected' && 'hidden')}
          />
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLayoutType('protectedWeb')}>
          <IconLayoutAlignLeft size={14} className='mr-2 ' />
          Protected Web
          <IconCheck
            size={14}
            className={cn('ml-auto', layoutType !== 'protectedWeb' && 'hidden')}
          />
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
