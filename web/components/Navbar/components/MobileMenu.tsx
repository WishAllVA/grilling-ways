import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { routes } from "../constants";

interface MobileMenuProps {
    routes: typeof routes;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ routes }): ReactElement => {
    const router = useRouter();
    return (
        <Disclosure.Panel className=''>
            <div className='px-2 pt-2 pb-3 space-y-1'>
                {
                    routes.map((route) => (
                        <Disclosure.Button
                            key={route.name}
                            as="a"
                            href={route.href}
                            className={`${router.pathname === route.href
                                ? 'bg-gray-900 text-white'
                                : 'text-black hover:bg-gray-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`
                            }
                        >
                            {route.name}
                        </Disclosure.Button>
                    ))
                }
            </div>
        </Disclosure.Panel>
    );
}

export default MobileMenu;