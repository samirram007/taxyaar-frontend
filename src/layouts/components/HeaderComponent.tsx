
import { ProfileDropdown } from '@/components/profile-dropdown';
import React from "react";
import { Header } from "./header";
import { Link } from '@tanstack/react-router';


const HeaderComponent: React.FC<{}> = () => {
    return (
        <Header className='max-w-full rounded-t-md   bg-gray-50'>
            <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <img src="/images/taxyaarLogo.png" alt="Taxyaar Logo" />
                </div>
                <span className="font-semibold text-2xl text-foreground hidden sm:inline">Taxyaar</span>
            </Link>
            <div className='ml-auto flex items-center max-w-screen space-x-0 lg:space-x-4'>

                <ProfileDropdown />
            </div>
        </Header>
    )
}

export default HeaderComponent
HeaderComponent.displayName = 'HeaderComponent';