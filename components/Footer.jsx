import React from 'react';

function Footer() {

    return (
        <>
            <footer className="bg-[#151515] text-white py-12 px-4 font-inter border-t border-[#1d1d1d]">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:w-[90vw]">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <h3 className="text-3xl font-extrabold text-blue-400">
                                Notexa
                            </h3>
                        </div>
                        <p className="text-gray-300 text-md leading-relaxed">
                            Notexa is a marketplace to buy and sell high-quality notes from top students and professionals.  <br />
                            Simple, secure, and affordable, your go-to hub for trusted study resources anytime, anywhere.
                        </p>
                        <div className="flex space-x-5 pt-2">
                            <a
                                href="https://www.instagram.com/tech_banao?igsh=cmo1OWcyNGI0bWM="
                                target="_blank"
                                className="text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-110"
                            >
                                <i className="fa-brands fa-square-instagram text-[30px]"></i>
                            </a>
                            <a
                                href="https://x.com/tech_banao?t=2znOH3HlPsfx9X4dewll9w&s=09"
                                target="_blank"
                                className="text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-110"
                            >
                                <i className="fa-brands fa-square-x-twitter text-[30px]"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-110"
                            >
                                <i className="fa-brands fa-linkedin text-[30px]"></i>
                            </a>
                        </div>
                    </div>

                    { }
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-100">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#home"
                                    className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#aboutus"
                                    className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                                >
                                    Notes
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                                >
                                    Sell Notes
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#worksamples"
                                    className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                                >
                                    Subscriptions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contactus"
                                    className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    { }
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            Features
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a className="text-gray-300 cursor-pointer hover:text-blue-500 transition-colors duration-300">
                                    Browse handwritten notes
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-300 cursor-pointer hover:text-blue-500 transition-colors duration-300">
                                    Premium notes
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-300 cursor-pointer hover:text-blue-500 transition-colors duration-300">
                                    sell notes
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-300 cursor-pointer hover:text-blue-500 transition-colors duration-300">
                                    earn money by selling notes
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-300 cursor-pointer hover:text-blue-500 transition-colors duration-300"></a>
                            </li>
                        </ul>
                    </div>

                    { }
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-gray-100">
                            Contact Us
                        </h3>
                        <p className="text-gray-300">
                            Chandrapur Maharashtra, India
                        </p>
                        <p className="text-gray-300">
                            Email: thetechbanao@gmail.com
                        </p>

                        <p>Phone</p>
                        <div className="flex flex-col text-gray-300 text-[14px]">
                            <a href="tel:+917720803593">+91 77208 03593</a>
                            <a href="tel:+919960507451">+91 99605 07451</a>
                        </div>
                    </div>
                </div>

                { }
                <div className="text-center text-gray-400 text-sm pt-10 mt-10 border-t border-[#363636]">
                    <p>Made with ❤️ by Pritam Mandal</p>
                    <p>
                        &copy; {new Date().getFullYear()} notexa.in All rights reserved.
                    </p>
                    {/* <p className="mt-1">Designed with <span className="text-red-500">&hearts;</span> by Your Company</p> */}
                </div>
            </footer>
        </>
    );
}

export default Footer;
