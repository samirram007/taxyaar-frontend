import SkipToMain from '@/components/skip-to-main'
import { Toaster } from '@/components/ui/sonner'
import { SearchProvider } from '@/core/contexts/search-context'
import { Outlet } from '@tanstack/react-router'
import { Suspense, useEffect } from 'react'
import HeaderComponent from './components/HeaderComponent'




const ProtectedLayout = () => {
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
                <SkipToMain />

                <div className="scroll-container flex sticky top-50 z-50">
                    {/* <!-- ===== Page Wrapper Start ===== --> */}
                    <div className="max-w-screen w-full relative flex  h-screen overflow-hidden ">

                        {/* <AppSidebar />  */}
                        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden ">

                            <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">


                                <HeaderComponent />
                                {/* <!-- ===== Header End ===== --> */}

                                {/* <!-- ===== Main Content Start ===== --> */}
                                <main className="max-w-screen 
                           bg-linear-to-b
from-slate-100 from-10%  to-slate-300 to-20% flex-1  ">
                                    <div className="container mx-auto h-full w-full pt-12">


                                        <Suspense fallback={<Toaster />}>
                                            <Outlet />
                                        </Suspense>


                                    </div>
                                </main>

                            </div>
                        </div>

                    </div>
                    {/* <!-- ===== Page Wrapper End ===== --> */}
                </div>

            </SearchProvider>
        </Suspense>
    )
}

export default ProtectedLayout