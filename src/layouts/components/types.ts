import type { LinkProps } from "@tanstack/react-router"



interface User {
  name: string
  email: string
  avatar: string
  visible: boolean
}

interface Team {
  name: string
  visible: boolean
  logo: React.ElementType
  plan: string
}

interface BaseNavItem {
  title: string
  badge?: string
  icon?: React.ElementType
  visible?: boolean
}

type NavLink = BaseNavItem & {
  url: string | LinkProps['to']
}

type NavCollapsible = BaseNavItem & {
  items: NavItem[]
  url?: string | LinkProps['to']
}

type NavItem = NavCollapsible | NavLink

interface NavGroup {
  title: string
  visible: boolean
  url?: string
  items: NavItem[]
}
interface Header {
  logo: React.ElementType
  title: string
  visible: boolean
  subtitle: string
}

interface SidebarData {
  user: User
  header: Header
  teams: Team[]
  wizardGroups: NavGroup[]
  navGroups: NavGroup[]
}

export type { NavCollapsible, NavGroup, NavItem, NavLink, SidebarData }

