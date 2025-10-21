import React from 'react';

function page() {
    return (
        <>
            <div className='w-full h-screen flex'>
                <div className='w-full xl:w-[55%] h-full flex items-center justify-center'>
                    <div className='w-[90%] xl:w-[65%] flex flex-col gap-10'>
                        <h1 className='text-3xl self-center font-semibold'>Log in</h1>

                        <div className='flex flex-col gap-5'>
                        
                            <div className='flex flex-col gap-[2px]'>
                                {/* <label className='text-[17px]'>Email</label> */}
                                <input
                                    type='email'
                                    placeholder='Enter Email'
                                    className='bg-gray-300 px-3 py-3 rounded-lg placeholder:text-[#232323]'
                                />
                            </div>
                            <div className='flex flex-col gap-[2px]'>
                                {/* <label className='text-[17px]'>Password</label> */}
                                <input
                                    type='password'
                                    placeholder='Enter Password'
                                    className='bg-gray-300 px-3 py-3 rounded-lg placeholder:text-[#232323]'
                                />
                            </div>

                            <button className='bg-blue-400 py-3 rounded-2xl font-semibold text-[17px] cursor-pointer'>Log in</button>
                        </div>
                        <div className="flex items-center gap-3 w-full">
                            <hr className="flex-grow border-gray-600" />
                            <span className="text-gray-600 font-medium">or</span>
                            <hr className="flex-grow border-gray-600" />
                        </div>

                        <button className='shadow-xl flex items-center cursor-pointer justify-center gap-8 xl:w-[60%] self-center px-5 py-3 rounded-xl border-1 border-[#787878] hover:bg-[#e6e6e6] transition-all duration-400'>
                            <img src='/googleLogo.png'
                                className='w-6 h-6'
                            />
                            <span>
                                Continue with Google
                            </span>
                        </button>

                    </div>
                </div>
                <div className='hidden xl:inline bg-[url("/image3.jpg")] bg-cover bg-center w-[45%] h-full'>
                </div>
            </div>
        </>
    );
}

export default page;
