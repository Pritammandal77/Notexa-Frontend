import { BookOpen, DollarSign, Search, Upload } from 'lucide-react';
import React from 'react';

function About() {
    return (
        <>
            <div className='w-full h-auto'>

                <section className="w-full bg-gray-50 py-20">
                    <div className="w-[90%] max-w-7xl mx-auto text-center">
                        {/* Section Heading */}
                        <h2 className="text-5xl font-bold mb-4 text-gray-900">How It Works ?</h2>
                        <p className="text-gray-600 text-lg mb-16">
                            Simple steps to share, discover, and earn from handwritten notes.
                        </p>

                        {/* Steps Grid */}
                        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">

                            {/* Step 1 */}
                            <div className="bg-[#e3f9fe] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="flex justify-center mb-6">
                                    <div className="p-4 bg-blue-200 rounded-full">
                                        <Upload size={35} className="text-[#2563EB]" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Create personalized handwritten Notes</h3>
                                <p className="text-gray-600">
                                    Write neat, organized notes in your own style — your clarity makes them valuable to others.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-green-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="flex justify-center mb-6">
                                    <div className="p-4 bg-green-200 rounded-full">
                                        <Search size={35} className="text-[#10B981]" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Make PDF of your notes</h3>
                                <p className="text-gray-600">
                                    Scan or capture your notes and convert them into clean, shareable PDFs.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="flex justify-center mb-6">
                                    <div className="p-4 bg-yellow-100 rounded-full">
                                        <DollarSign size={35} className="text-[#F59E0B]" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">List your notes</h3>
                                <p className="text-gray-600">
                                    Upload your PDFs, set a price, and list them for students to discover and buy.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="bg-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="flex justify-center mb-6">
                                    <div className="p-4 bg-purple-200 rounded-full">
                                        <BookOpen size={35} className="text-[#8B5CF6]" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Earn money when a user buys your notes</h3>
                                <p className="text-gray-600">
                                    Earn every time your notes sell - turn your effort into income while helping others.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </>
    );
}

export default About;
