import { TableOfContents } from 'lucide-react';
import React from 'react';

function Header() {
    return (
        <>
            <header className='z-20 h-17 w-full text-[18px] bg-white border-b border-gray-200 shadow-sm flex flex-row items-center justify-between px-5 md:px-20 fixed top-0'>
                <div className='font-bold text-[24px]'>
                    Notexa
                </div>
                <div className='hidden xl:inline'>
                    <ul className='flex items-center gap-10'>
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Buy Notes
                        </li>
                        <li>
                            Sell Notes
                        </li>
                        <li>
                            Dashboard
                        </li>
                    </ul>
                </div>
                <div className='xl:hidden font-bold'>
                    <TableOfContents size={28} weight="bold"/>
                </div>
            </header>
        </>
    );
}

export default Header;
