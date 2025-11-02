"use client"
import { CircleX, TableOfContents } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import Login from './Login';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { logOutUser } from '@/utils/userApi';
import { toast } from 'sonner';
import Loader1 from './Loader/Loader';
// import DialogBox from './DialogBox';

function Header() {

    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const user = useSelector((state) => state.user?.currUser?.user)
    console.log("user on header", user?.profilePicture)

    const [isLoading, setIsLoading] = useState(false)
    const handleLogout = async () => {
        try {
            setIsLoading(true);
            await logOutUser();
            setIsLoading(false);
        } catch (error) {
            toast.error("Log out failed");
        }
    }

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
                            Notes
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
                            Profile
                        </li>
                    </ul>
                </div>
                <div className='xl:hidden font-bold'>
                    <TableOfContents size={28} weight="bold" />
                </div>
            </header>

            <div
                className={`fixed flex flex-col items-center justify-center gap-7 top-20 right-10 h-40 w-100 bg-orange-100 border-1 border-orange-200 z-20 rounded-lg shadow-lg p-4 transition-all duration-300 ease-out 
                                ${isDialogOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
            >
                {
                    user ?
                        (
                            <div className='w-full h-[100%] relative'>
                                <div className='flex items-center gap-5'>
                                    <Image
                                        src={user?.profilePicture}
                                        alt="User image"
                                        width={70}
                                        height={70}
                                        className='rounded-full'
                                    />
                                    <div>
                                        <p className='font-semibold'>
                                            {user.fullName}
                                        </p>
                                        <p>
                                            {user.email}
                                        </p>
                                    </div>
                                </div>

                                <CircleX className='absolute top-3 right-3 cursor-pointer'
                                    onClick={() => isDialogOpen ? setIsDialogOpen(false) : setIsDialogOpen(true)}
                                />
                                <button className='bg-orange-500 text-white font-semibold cursor-pointer text-[15px] px-3 py-1 rounded-xl absolute bottom-0 right-0'
                                    onClick={() => handleLogout()}
                                >
                                    Log Out
                                </button>
                            </div>
                        ) :
                        (
                            <div className='w-[100%] h-[100%] flex flex-col items-center justify-center gap-6'>
                                <h1 className='text-2xl font-bold'>Login now</h1>
                                <Login />
                                <CircleX className='absolute top-3 right-3 cursor-pointer'
                                    onClick={() => isDialogOpen ? setIsDialogOpen(false) : setIsDialogOpen(true)}
                                />
                            </div >
                        )
                }

            </div >
            {
                isLoading &&
                <Loader1 />
            }

        </>
    );
}

export default Header;
