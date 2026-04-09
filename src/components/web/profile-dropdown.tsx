import { useState } from 'react'
// import { Link } from '@tanstack/react-router'
import { ProfileEditModal } from '@/components/web/profile-edit-modal'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/features/auth/contexts/AuthContext'
import { Link } from '@tanstack/react-router'
import { useIsMobile } from '@/hooks/use-mobile'

export function ProfileDropdown() {
  const auth = useAuth()
  const isMobile = useIsMobile()
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

  const displayName = auth.user?.name || auth.user?.username || 'User'
  const displayEmail = auth.user?.email || auth.user?.username || 'No email'
  const avatarFallback = displayName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('')

  const handleLogout = async () => {
    await auth.logout()
  }

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative h-8 w-8 rounded-full shadow-md text-slate-800"
          >
            <Avatar className="h-8 w-8">
              {!isMobile && (
                <AvatarImage src="/avatars/01.png" alt={displayName} />
              )}
              <AvatarFallback>{avatarFallback || 'U'}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{displayName}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {displayEmail}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              onSelect={(event) => {
                event.preventDefault()
                setIsProfileModalOpen(true)
              }}
            >
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a
                href="https://help.taxyaar.com/help-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Help
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/help-tickets">Your Help Tickets</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a
                href="https://help.taxyaar.com/request-feature"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a Feature
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ProfileEditModal
        open={isProfileModalOpen}
        onOpenChange={setIsProfileModalOpen}
        profile={auth.user}
      />
    </>
  )
}
