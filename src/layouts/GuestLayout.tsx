import Header from '@/features/home/components/header'
import Footer from '@/features/home/components/footer'
import { Outlet } from '@tanstack/react-router'


const GuestLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default GuestLayout