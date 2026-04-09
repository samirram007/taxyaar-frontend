

import { ProfileDropdown } from '@/components/web/profile-dropdown';
import React from "react";
import { Header } from "./header";
import { Link } from '@tanstack/react-router';
import { LayoutSwitch } from '@/components/web/latout-switch';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';


const HeaderComponent: React.FC<{}> = () => {
    const appName = import.meta.env.REACT_APP_NAME || "Taxyaar";
    const isMobile = useIsMobile();
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Header fixed className="h-14 w-full rounded-none bg-blue-500 px-2 sm:px-4 text-white flex items-center justify-between">
            <Link to="/" className="flex items-center min-w-0 gap-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10">
                    <img src="/images/taxyaarLogo.png" alt={`${appName} Logo`} className="max-h-8 max-w-8 object-contain" />
                </div>
                <span className="font-bold select-none text-lg sm:text-2xl text-white tracking-wide truncate">{appName}</span>
            </Link>
            {isMobile ? (
                <div className="ml-auto flex items-center">
                    <button
                        className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                    {menuOpen && (
                        <div className="absolute top-14 right-2 z-50 w-48 bg-blue-600 rounded shadow-lg flex flex-col p-2 animate-fade-in">
                            {/* Add all header actions here for mobile */}
                            {/* <Link to="/support" className="px-3 py-2 rounded hover:bg-blue-700 text-white font-medium text-sm mb-1">Support</Link> */}
                            <LayoutSwitch />
                            <ProfileDropdown />
                        </div>
                    )}
                </div>
            ) : (
                <div className="ml-auto flex items-center space-x-2 lg:space-x-4">
                    {/* <Link to="/support" className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm">Support</Link> */}
                    <LayoutSwitch />
                    <ProfileDropdown />
                </div>
            )}
        </Header>
    );
}

export default HeaderComponent
HeaderComponent.displayName = 'HeaderComponent';