'use client'

import { useRouter } from 'next/navigation';

import SimpleHeader from '@/components/layouts/SimpleHeader';
import Footer from '@/components/layouts/Footer';
import Navigation from '@/components/layouts/Navigation';

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const back = () => {
        router.back()
    }
    return (
        <>
            {/* <div className="w-full flex items-center borde border-gray-200">
                <span className="ml-1" onClick={back}>
                    <Image width="40" height="50" src="https://img.icons8.com/ios/50/left--v1.png" alt="left--v1" />
                </span>
                <p className="flex-grow  text-lg text-center">MY SSG</p>
                <Image
                    width="30"
                    height="38"
                    src="https://img.icons8.com/windows/32/shopping-cart.png"
                    alt="shopping-cart"
                    className="mr-3 "
                />
                <Image
                    width="30"
                    height="32"
                    src="https://img.icons8.com/windows/32/home.png"
                    alt="home"
                    className="mr-5"
                />
            </div> */}
            <SimpleHeader title="MY SSG" />
            {children}
            <Footer />
            <Navigation />
        </>
    )
}
