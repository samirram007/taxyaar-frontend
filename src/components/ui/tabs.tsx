import * as React from 'react'
import { cn } from '@/lib/utils'

interface TabsContextType {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = React.createContext<TabsContextType | undefined>(undefined)

interface TabsProps {
  defaultValue: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  children: React.ReactNode
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ defaultValue, value, onValueChange, className, children }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue)
    const currentValue = value !== undefined ? value : internalValue

    const handleValueChange = (newValue: string) => {
      setInternalValue(newValue)
      onValueChange?.(newValue)
    }

    return (
      <TabsContext.Provider
        value={{ value: currentValue, onValueChange: handleValueChange }}
      >
        <div ref={ref} className={cn('w-full', className)}>
          {children}
        </div>
      </TabsContext.Provider>
    )
  },
)
Tabs.displayName = 'Tabs'

interface TabsListProps {
  className?: string
  children: React.ReactNode
}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children }, ref) => (
    <div
      ref={ref}
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
        className,
      )}
    >
      {children}
    </div>
  ),
)
TabsList.displayName = 'TabsList'

interface TabsTriggerProps {
  value: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, className, children, onClick }, ref) => {
    const context = React.useContext(TabsContext)
    if (!context) {
      throw new Error('TabsTrigger must be used within Tabs')
    }

    const isActive = context.value === value
    const handleClick = () => {
      context.onValueChange(value)
      onClick?.()
    }

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          isActive
            ? 'bg-background text-foreground shadow-sm'
            : 'text-slate-600 hover:text-slate-900',
          className,
        )}
      >
        {children}
      </button>
    )
  },
)
TabsTrigger.displayName = 'TabsTrigger'

interface TabsContentProps {
  value: string
  className?: string
  children: React.ReactNode
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, className, children }, ref) => {
    const context = React.useContext(TabsContext)
    if (!context) {
      throw new Error('TabsContent must be used within Tabs')
    }

    if (context.value !== value) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          className,
        )}
      >
        {children}
      </div>
    )
  },
)
TabsContent.displayName = 'TabsContent'

export { Tabs, TabsList, TabsTrigger, TabsContent }
