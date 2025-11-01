"use client"
import React from 'react';

function Login() {

    const handleLogin = () => {
        // Open backend signin in same tab so that cookies set by backend are available to the site origin
        window.location.href = 'http://localhost:8000/api/auth/google';
    };

    return (
        <>
            <button
                onClick={handleLogin}
                className='shadow-xl flex items-center cursor-pointer justify-center gap-8 xl:w-[80%] bg-white self-center px-5 py-3 rounded-xl border-1 border-[#787878] hover:bg-[#e6e6e6] transition-all duration-400'>
                <img src='/googleLogo.png'
                    className='w-6 h-6'
                />
                <span className='font-semibold'>
                    Continue with Google
                </span>
            </button>
        </>
    );
}

export default Login;
