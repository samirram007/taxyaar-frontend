
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,

  SidebarMenuSubItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { ChevronRight } from 'lucide-react'
import { IconMinus, IconPlus } from '@tabler/icons-react'

import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link, useLocation } from '@tanstack/react-router'
import { useEffect, useState, type ReactNode } from 'react'
import { type NavCollapsible, type NavGroup, type NavItem, type NavLink } from './types'

type NavGroupProps = NavGroup & {
  collapsibleIndicator?: 'chevron' | 'plus-minus'
}

export function NavGroup({ title, items, collapsibleIndicator = 'chevron' }: NavGroupProps) {
  const { state } = useSidebar()
  const location = useLocation()
  const href = location.pathname

  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>{title}</SidebarGroupLabel> */}
      <SidebarMenu className='px-0!'>
        {items.map((item) => {
          const key = `${item.title}-${item.url}`

          if (!('items' in item))
            return <SidebarMenuLink key={key} item={item as NavLink} href={href} />

          if (state === 'collapsed')
            return <SidebarMenuCollapsedDropdown key={key} item={item as NavCollapsible} href={href} />

          return (
            <SidebarMenuCollapsible
              key={key}
              item={item as NavCollapsible}
              href={href}
              collapsibleIndicator={collapsibleIndicator}
            />
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}

const NavBadge = ({ children }: { children: ReactNode }) => (
  <Badge className='rounded-full px-1 py-0 text-xs'>{children}</Badge>
)

const SidebarMenuLink = ({ item, href }: { item: NavLink; href: string }) => {
  const { setOpenMobile } = useSidebar()
  if (!item.visible) return null
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={checkIsActive(href, item)}
        tooltip={item.title}
        className='w-full px-0! pr-2! text-xs text-slate-700 hover:bg-blue-50/70 hover:text-blue-700 data-[active=true]:bg-blue-50 data-[active=true]:text-blue-700'
      >
        <Link to={item.url} onClick={() => setOpenMobile(false)}
          aria-label={item.title}
          title={item.title}
          className='flex w-full items-start gap-2 whitespace-normal wrap-break-word leading-5'
        >
          {/* {item.icon && <item.icon />} */}
          <span className='flex-1 min-w-0 whitespace-normal wrap-break-word'>{item.title}</span>
          {item.badge && <NavBadge>{item.badge}</NavBadge>}
          {!item.badge && <span aria-hidden='true' className='ml-2 w-4 shrink-0' />}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

const SidebarMenuCollapsible = ({
  item,
  href,
  collapsibleIndicator,
}: {
    item: NavCollapsible
  href: string
    collapsibleIndicator: 'chevron' | 'plus-minus'
}) => {
  const [isOpen, setIsOpen] = useState(() => checkIsActive(href, item, true))

  useEffect(() => {
    if (checkIsActive(href, item, true)) {
      setIsOpen(true)
    }
  }, [href, item])

  return (
    <Collapsible
      asChild
      open={isOpen}
      onOpenChange={setIsOpen}
      className='group/collapsible'
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild className='group/trigger'>
          <SidebarMenuButton tooltip={item.title} className='w-full px-0! pr-2!'>
            {/* {item.icon && <item.icon />} */}
            <span className='flex-1 min-w-0 whitespace-normal wrap-break-word leading-5'>{item.title}</span>
            {item.badge && <NavBadge>{item.badge}</NavBadge>}
            {collapsibleIndicator === 'plus-minus' ? (
              <span className='ml-2 flex w-4 items-center justify-center shrink-0'>
                <IconPlus className='size-4 group-data-[state=open]/trigger:hidden' />
                <IconMinus className='hidden size-4 group-data-[state=open]/trigger:block' />
              </span>
            ) : (
              <span className='ml-2 flex w-4 items-center justify-center shrink-0'>
                <ChevronRight className='size-4 transition-transform duration-200 group-data-[state=open]/trigger:rotate-90' />
              </span>
            )}

          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent className='CollapsibleContent overflow-hidden px-0! data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up data-[state=closed]:[animation-delay:80ms]'>
          <SidebarMenuSub className='mx-0! ml-2! px-0! pl-2! pr-0! mr-0!'>
            {item.items
              .filter((subItem: NavItem) => subItem.visible)
              .map((subItem: NavItem) => (
                <SidebarMenuSubItemComponent
                  key={subItem.title}
                  subItem={subItem}
                  href={href}
                  collapsibleIndicator={collapsibleIndicator}
                />
              ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

const SidebarMenuSubItemComponent = ({
  subItem,
  href,
  collapsibleIndicator,
}: {
  subItem: NavItem
  href: string
  collapsibleIndicator: 'chevron' | 'plus-minus'
}) => {

  return (
    <SidebarMenuSubItem key={subItem.title} className='px-0!'>
      {
        subItem && 'items' in subItem ? (
          <SidebarMenuCollapsible item={subItem} href={href} collapsibleIndicator={collapsibleIndicator} />
        ) : (
          <SidebarMenuLink item={subItem as NavLink} href={href} />
        )
      }


    </SidebarMenuSubItem>)
}

const SidebarMenuCollapsedDropdown = ({
  item,
  href,
}: {
  item: NavCollapsible
  href: string
  }) => {
  return (
    <SidebarMenuItem className='px-0! text-xs'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            tooltip={item.title}
            isActive={checkIsActive(href, item)}
          >
            {/* {item.icon && <item.icon />} */}
            <span>{item.title}</span>
            {item.badge && <NavBadge>{item.badge}</NavBadge>}
            {/* <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' /> */}
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent side='right' align='start' sideOffset={4}>
          <DropdownMenuLabel>
            {item.title} {item.badge ? `(${item.badge})` : ''}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {item.items.map((sub) => (
            <DropdownMenuItem key={`${sub.title}-${sub.url}`} asChild>
              <Link
                to={sub.url as string}
                className={`text-xs text-slate-700 hover:bg-blue-50/70 hover:text-blue-700 whitespace-normal wrap-break-word leading-5 ${checkIsActive(href, sub as NavItem) ? 'bg-blue-50 text-blue-700' : ''}`}
              >
                {sub.icon && <sub.icon />}
                <span className='max-w-52 whitespace-normal wrap-break-word'>{sub.title}</span>
                {sub.badge && (
                  <span className='ml-auto text-xs'>{sub.badge}</span>
                )}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  )
}

function checkIsActive(href: string, item: NavItem, mainNav = false): boolean {
  const normalizedHref = href.split('?')[0]
  const itemUrl = typeof item.url === 'string' ? item.url : undefined
  const hasActiveChild: boolean =
    'items' in item ? item.items.some((child: NavItem) => checkIsActive(normalizedHref, child)) : false

  return (
    normalizedHref === itemUrl ||
    hasActiveChild ||
    (mainNav &&
      normalizedHref.split('/')[1] !== '' &&
      normalizedHref.split('/')[1] === itemUrl?.split('/')[1])
  )
}
