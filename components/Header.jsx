"use client"
import { CircleX, TableOfContents } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import Login from './Login';
// import DialogBox from './DialogBox';

function Header() {

    const [isDialogOpen, setIsDialogOpen] = useState(false)

    return (
        <>
            <header className='z-20 h-17 w-full text-[18px] bg-white border-b border-gray-200 shadow-sm flex flex-row items-center justify-between px-5 md:px-20 fixed top-0'>
                <div className='font-bold text-[24px]'>
                    Notexa
                </div>
                <div className='hidden xl:inline'>
                    <ul className='flex items-center gap-10'>
                        <li className='font-semibold cursor-pointer'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='font-semibold cursor-pointer'>
                            About
                        </li>
                        <li className='font-semibold cursor-pointer'>
                            Buy Notes
                        </li>
                        <li className='font-semibold cursor-pointer'>
                            <Link href="/sellnotes">Sell Notes</Link>
                        </li>
                        <li className='font-semibold cursor-pointer'>
                            Dashboard
                        </li>
                        <li className='font-semibold cursor-pointer'
                            onClick={() => isDialogOpen ? setIsDialogOpen(false) : setIsDialogOpen(true)}
                        >
                            {/* <Link href="/signup">Login</Link> */}
                            Login
                        </li>
                    </ul>
                </div>
                <div className='xl:hidden font-bold'>
                    <TableOfContents size={28} weight="bold" />
                </div>
            </header>

            <div
                className={`fixed flex flex-col items-center justify-center gap-7 top-20 right-10 h-50 w-100 bg-orange-100 border-1 border-orange-200 z-20 rounded-lg shadow-lg p-4 transition-all duration-300 ease-out 
                                ${isDialogOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
            >
                <h1 className='text-2xl font-bold'>Login now</h1>
                <Login />
                <CircleX className='absolute top-3 right-3 cursor-pointer'
                    onClick={() => isDialogOpen ? setIsDialogOpen(false) : setIsDialogOpen(true)}
                />
            </div>


        </>
    );
}

export default Header;
