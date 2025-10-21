import React from 'react';

function page() {
    return (
        <>
            <div className='w-full h-screen flex'>
                <div className='w-full xl:w-[55%] h-full flex items-center justify-center'>
                    <div className='w-[90%] xl:w-[75%] flex flex-col gap-10'>
                        <h1 className='text-3xl self-center font-semibold'> Create an Account</h1>

                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col gap-[2px] w-[48%]'>
                                    {/* <label className='text-[17px]'>First name</label> */}
                                    <input
                                        type='text'
                                        placeholder='Enter first name'
                                        className='bg-gray-300 px-3 py-3 rounded-lg placeholder:text-[#232323]'
                                    />
                                </div>
                                <div className='flex flex-col gap-[2px] w-[48%]'>
                                    {/* <label className='text-[17px]'>Last name</label> */}
                                    <input
                                        type='text'
                                        placeholder='Enter last name'
                                        className='bg-gray-300 px-3 py-3 rounded-lg placeholder:text-[#232323]'
                                    />
                                </div>
                            </div>
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

                            {/* <div className="flex w-full"> */}
                                <label className="flex items-center justify-center gap-4 px-6 py-2 bg-white text-blue-700 border-2 border-dashed border-blue-300 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-400 transition-colors">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0-6l3 3m-3-3l-3 3m6-9V4a2 2 0 00-2-2H8a2 2 0 00-2 2v3" />
                                    </svg>
                                    <span className="text-sm font-medium">Choose a profile picture</span>
                                    <input type="file" className="hidden" />
                                </label>
                            {/* </div> */}

                            <button className='bg-blue-400 py-3 rounded-2xl font-semibold text-[17px] cursor-pointer'>Create Account</button>
                            <p className='self-center'>
                                Already have an account ? <a href='/signin' className='text-blue-600'>Login</a>
                            </p>
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
                <div className='hidden xl:inline bg-[url("/signUpImg.webp")] w-[45%] h-full'>
                </div>
            </div>
        </>
    );
}

export default page;
