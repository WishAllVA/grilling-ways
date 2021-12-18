import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import { routes } from '../constants'
import Link from 'next/link'
import styles from '../Navbar.module.css'

interface NavbarLinkProps {
    routes: typeof routes
}

const SelectedNavBarItem = ({ href, name, className }: { href: string, name: string, className: string }) => {
    return (
        <a href={href} className={`${className} ${styles.selectedNavbarItem}`} >{name}</a>
    )
}

const NavbarItem = ({ href, name, className }: { href: string, name: string, className?: string }) => {
    return (
        <a href={href} className={`${className} ${styles.navbarItem}`}>{name}</a>
    )
}

const NavbarLink = ({ routes }: NavbarLinkProps): ReactElement => {
    const router = useRouter();
    return (
        <div className="hidden lg:block lg:mr-6">
            <div className="flex space-x-4">
                {
                    routes.map((route) => {
                        return router.asPath === route.href ? (
                            <SelectedNavBarItem
                                key={route.name}
                                href={route.href}
                                className={'px-3 my-2 mx-2 rounded-md text-lg font-medium'}
                                name={route.name}
                            />
                        ) :
                            (
                                <NavbarItem
                                    key={route.name}
                                    href={route.href}
                                    className={'px-3 my-2 mx-2 rounded-md text-lg font-medium'}
                                    name={route.name}
                                />
                            )
                    })
                }
            </div>
        </div>
    )
}

export default NavbarLink;