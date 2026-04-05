import SkipToMain from '@/components/skip-to-main'
import { Toaster } from '@/components/ui/sonner'
import { SearchProvider } from '@/core/contexts/search-context'
import { Outlet } from '@tanstack/react-router'
import { Suspense, useEffect, type CSSProperties } from 'react'
import HeaderComponent from './components/HeaderComponent'
import { SidebarProvider } from '@/components/ui/sidebar'
import WizardSidebar from './components/wizard-sidebar'




const ProtectedWebLayout = () => {
    const layoutStyle = {
        '--header-height': '3.5rem',
    } as CSSProperties

    useEffect(() => {

        document.querySelectorAll('link').forEach((styleTag) => {
            const id = styleTag.getAttribute("href") || "";

            // Keep ONLY your styles.css (exact path match)
            if (id.includes("slick-theme.css") || id.includes("slick.css") || id.includes("bootstrap.min.css") || id.includes("font-awesome.min.css") || id.includes("custom.css")) {
                styleTag.remove();
            }

        });
    }, []);
    return (
        <Suspense fallback={<Toaster />}>
            <SearchProvider>
                <SidebarProvider defaultOpen={true}>
                    <SkipToMain />
                    <div className="flex h-svh w-full flex-col overflow-hidden" style={layoutStyle}>
                        <div className="shrink-0">
                            <HeaderComponent />
                        </div>
                        <div className="flex min-h-0 flex-1 overflow-hidden">
                            <div className='w-75!  p-0! shrink-0 border-r border-gray-200 text-xs!'>
                                <WizardSidebar />
                                {/* <AppSidebar /> */}
                            </div>
                            <div className="flex min-w-0 flex-1 flex-col">
                                <main className="bg-linear-to-b from-slate-100 from-10% to-slate-300 to-20% flex-1 min-h-0 overflow-y-auto">
                                    <div className="container mx-auto h-full w-full px-4 py-8 sm:px-6 lg:px-8">
                                        <Suspense fallback={<Toaster />}>
                                            <Outlet />
                                        </Suspense>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </SidebarProvider>
            </SearchProvider>
        </Suspense>
    )
}

export default ProtectedWebLayout