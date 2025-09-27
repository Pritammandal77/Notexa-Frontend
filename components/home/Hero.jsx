import { Sparkles } from 'lucide-react';
import React from 'react';

function Hero() {
    return (
        <>
            <div className='w-full h-screen flex items-center justify-center relative'>

                <div className='w-[100%] px-3 xl:w-[80vw] z-10 flex flex-col items-center'>
                    <span className="flex items-center gap-2 text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-4">
                      <Sparkles size={15}/>  Notexa – Learn, Share, Earn
                    </span>

                    <h1 className='text-5xl md:text-6xl lg:text-7xl text-center font-bold'>
                        Turn Your <span className='text-[#2563EB]'>Notes</span> Into <span className='text-[#08b77d]'>Opportunities</span><br />
                        Sell, Share, and Learn Together
                    </h1>
                    <p className='text-center text-lg text-[#222222] mt-6'>
                        Join our platform to share your handwritten notes, help others learn, and earn from your knowledge. <br /> Discover valuable notes, connect with students, and make learning rewarding for everyone.
                    </p>
                    <div className="flex justify-center gap-6 mt-8">
                        <button className="px-6 py-3 bg-[#2563EB] text-white cursor-pointer font-semibold rounded-lg hover:bg-blue-600 transition">
                            Get Started
                        </button>
                        <button className="px-6 py-3 bg-gray-400 text-gray-800 cursor-pointer font-semibold rounded-lg hover:bg-gray-500 transition">
                            Browse Notes
                        </button>
                    </div>
                </div>

                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "white",
                        backgroundImage: `
       linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
       linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
       radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
     `,
                        backgroundSize: "32px 32px, 32px 32px, 100% 100%",
                    }}
                />

            </div>
        </>
    );
}

export default Hero;
