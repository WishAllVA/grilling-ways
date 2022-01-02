import React, { useCallback } from "react";
import { Disclosure } from '@headlessui/react';
import Link from "next/link";
import Image from "next/image";
import NavbarLink from "./components/NavbarLink";
import { routes } from "./constants";
import MobileMenu from "./components/MobileMenu";
import MobileButton from "./components/MobileButton";
import { useSession, signIn, signOut } from 'next-auth/react'

const Navbar: React.FC = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const { data: session, status } = useSession();
    const navRoutes = session ? [...routes, { name: 'Logout', href: '/logout' }] : [...routes, { name: 'Login', href: '/login' }];
    const handleOpenModal = useCallback(() => {
        setOpenModal(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setOpenModal(false);
    }, []);

    return (
        <Disclosure as='nav' className='bg-white shadow-md sticky top-0 z-50'>
            {({ open }) => (
                <>
                    <div className="mx-auto px-5 py-2 ml-4 md:ml-14">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute-inset-y-0 right-0 flex items-center lg:hidden">
                                <MobileButton open={open} />
                            </div>
                            <div className="flex-1 flex items-center justify-end sm:items-stretch lg:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link href="/" passHref>
                                        <a>
                                            <Image
                                                src="/logo.png"
                                                alt="Grilling ways logo"
                                                width={50}
                                                height={50}
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:p-6">
                                <NavbarLink routes={navRoutes} />
                            </div>
                        </div>
                    </div>
                    <MobileMenu routes={navRoutes} />
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;