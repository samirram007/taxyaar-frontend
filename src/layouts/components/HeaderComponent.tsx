
import { ProfileDropdown } from '@/components/profile-dropdown';
import React from "react";
import { Header } from "./header";
import { Link } from '@tanstack/react-router';


const HeaderComponent: React.FC<{}> = () => {
    const appName = import.meta.env.REACT_APP_NAME || "Taxyaar";
    return (
        <Header className='max-w-full rounded-t-md   bg-blue-500'>
            <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <img src="/images/taxyaarLogo.png" alt={`${appName} Logo`} />
                </div>
                <span className="font-semibold select-none text-2xl text-background text-shadow-md hidden sm:inline">{appName}</span>
            </Link>
            <div className='ml-auto flex items-center max-w-screen space-x-0 lg:space-x-4'>

                <ProfileDropdown />
            </div>
        </Header>
    )
}

export default HeaderComponent
HeaderComponent.displayName = 'HeaderComponent';