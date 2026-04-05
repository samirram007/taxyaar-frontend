import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from '@/components/ui/sidebar'
import { Link } from '@tanstack/react-router'
import { sidebarData } from './data/sidebar-data'
import { NavGroup } from './nav-group'
import { NavUser } from './nav-user'

export default function WizardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar
            collapsible='icon'
            variant='inset'
            className='w-75 top-(--header-height) h-[calc(100svh-var(--header-height))]!'
            {...props}
        >
            <SidebarHeader className='hidden'>
                <Link to='/'>{sidebarData.header.title}</Link>
            </SidebarHeader>

            <SidebarContent className='wizard-scrollbar px-0! overflow-y-auto'>
                {sidebarData.wizardGroups.map((group) =>
                    group.visible ? (
                        <NavGroup key={group.title} {...group} collapsibleIndicator='plus-minus' />
                    ) : null
                )}
            </SidebarContent>

            <SidebarFooter className='hidden'>
                <NavUser user={sidebarData.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}