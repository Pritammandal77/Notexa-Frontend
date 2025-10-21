import { TableOfContents } from 'lucide-react';
import Link from 'next/link';
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
                        <li className='font-semibold cursor-pointer'>
                            Home
                        </li>
                        <li className='font-semibold cursor-pointer'>
                            About
                        </li>
                        <li className='font-semibold cursor-pointer'>
                            Buy Notes
                        </li>
                        <li className='font-semibold cursor-pointer'>
                            Sell Notes
                        </li>
                        <li className='font-semibold cursor-pointer'>
                            Dashboard
                        </li>
                        <li className='font-semibold cursor-pointer' >
                            <Link href="/signup">SignUp</Link>
                        </li>
                    </ul>
                </div>
                <div className='xl:hidden font-bold'>
                    <TableOfContents size={28} weight="bold" />
                </div>
            </header>
        </>
    );
}

export default Header;
