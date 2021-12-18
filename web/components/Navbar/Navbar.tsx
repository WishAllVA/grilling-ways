import React, { useCallback } from "react";
import { Disclosure } from '@headlessui/react';
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
    const [openModal, setOpenModal] = React.useState(false);

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
                            <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
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
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:p-0">
                                <div className="hidden lg:block lg:mr-6">
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                    <Link href="/about">
                                        <a>About</a>
                                    </Link>
                                    <Link href="/contact">
                                        <a>Contact</a>
                                    </Link>
                                    <Link href="/login">
                                        <a>Log in</a>
                                    </Link>
                                    <Link href="/signup">
                                        <a>Signup</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;