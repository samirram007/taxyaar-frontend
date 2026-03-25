import Banner from "./components/banner"
import Footer from "./components/footer"
import Header from './components/header';
import { Suspense } from 'react';
const BannerSkeleton = () => (
    <div className="h-dvh delay-1000 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse" />
);
const HeaderSkeleton = () => (
    <div className="h-16 bg-gray-300 animate-pulse" />
);
const FooterSkeleton = () => (
    <div className="h-24 bg-gray-300 animate-pulse mt-8" />
);
const Home = () => {

    return (
        <>

            <Suspense fallback={<HeaderSkeleton />}>
                <Header />
            </Suspense>
            <Suspense fallback={<BannerSkeleton />}>
                <div className="body">
                    <Banner />
                </div>
            </Suspense>
            <Suspense fallback={<FooterSkeleton />}>
                <Footer />
            </Suspense>
            {/* <TestFooter /> */}




        </>
    )
}

export default Home


