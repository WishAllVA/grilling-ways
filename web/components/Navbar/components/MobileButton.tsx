import React, { ReactElement } from "react";
import { Disclosure } from "@headlessui/react";

interface MobileButtonProps {
    open: boolean;
}

const MobileButton: React.FC<MobileButtonProps> = ({ open }): ReactElement => {
    return (
        <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
            <span className="sr-only">Open main menu</span>
            {
                open ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )
            }
        </Disclosure.Button>
    )
}

export default MobileButton;