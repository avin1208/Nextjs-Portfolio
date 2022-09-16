import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div className="bg-white py-80">
            <div className="max-w-screen-2xl m-auto w-11/12 mt-24">
                <div className="mb-36">
                    <span className="block text-5xl uppercase tracking-wider font-medium text-center mb-14 relative text-black">
                        ABOUT ME
                    </span>
                    <span className="absolute content-none h-6 mt-20 w-35 bg-yellow-400 left-2/4 rounded-md mb-6 ">

                    </span>
                    <div className="block text-center text-gray-600 text-lg max-w-7xl m-auto pt-48 mt-40">
                        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-48">
                    <div>
                        <h3 className="font-bold text-4xl mb-40">
                            Get to know me!
                        </h3>
                        <div>
                            <p className="text-lg text-gray-600 max-w-5xl mb-15">
                                I'm a <strong>Frontend Web Developer</strong>
                                building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the
                                <strong>Projects</strong>
                                section.
                            </p>
                            <p className="text-lg text-gray-600 max-w-5xl mb-15">
                                I also like sharing content related to the stuff that I have learned over the years in
                                <strong>Web Development</strong>
                                so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming.
                            </p>
                            <p className="text-lg text-gray-600 max-w-5xl mb-15">
                                I'm open to
                                <strong>Job</strong>
                                opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to
                                <strong>Contact</strong>
                                me.
                            </p>
                        </div>
                        <Link href="/contact" >
                            <a className="bg-yellow-400 text-black uppercase tracking-wider inline-block font-bold rounded-md transition duration-150 py-12 px-28 text-lg border-none cursor-pointer hover:translate-y-4 shadow-lg shadow-zinc-200 ">
                            Contact
                            </a>
                        </Link>
                    </div>
                    <div>
                        <h3 className="font-bold text-4xl mb-40">
                            My skills
                        </h3>
                        <div className="flex-wrap flex gap-12">
                            <div className="py-2 h-fit px-3.5 mb-6 mr-6 text-lg bg-gray-100 rounded-md font-semibold text-gray-500 cursor-pointer hover:bg-gray-300 ease-in">
                                HTML
                            </div>
                            <div className="py-2 h-fit px-3.5 mb-6 mr-6 text-lg bg-gray-100 rounded-md font-semibold text-gray-500 cursor-pointer hover:bg-gray-300 ease-in">
                                CSS
                            </div>
                            <div className="py-2 h-fit px-3.5 mb-6 mr-6 text-lg bg-gray-100 rounded-md font-semibold text-gray-500 cursor-pointer hover:bg-gray-300 ease-in">
                                JavaScript
                            </div>
                            <div className="py-2 h-fit px-3.5 mb-6 mr-6 text-lg bg-gray-100 rounded-md font-semibold text-gray-500 cursor-pointer hover:bg-gray-300 ease-in">
                                TypeScript
                            </div>
                            <div className="py-2 h-fit px-3.5 mb-6 mr-6 text-lg bg-gray-100 rounded-md font-semibold text-gray-500 cursor-pointer hover:bg-gray-300 ease-in">
                                React
                            </div>
                            <div className="py-2 h-fit px-3.5 mb-6 mr-6 text-lg bg-gray-100 rounded-md font-semibold text-gray-500 cursor-pointer hover:bg-gray-300 ease-in">
                                SASS
                            </div>
                            <div className="py-2 h-fit px-3.5 mb-6 mr-6 text-lg bg-gray-100 rounded-md font-semibold text-gray-500 cursor-pointer hover:bg-gray-300 ease-in">
                                GIT
                            </div>
                            <div className="py-2 h-fit px-3.5 mb-6 mr-6 text-lg bg-gray-100 rounded-md font-semibold text-gray-500 cursor-pointer hover:bg-gray-300 ease-in">
                                Responsive Design
                            </div>
                            <div className="py-2 h-fit px-3.5 mb-6 mr-6 text-lg bg-gray-100 rounded-md font-semibold text-gray-500 cursor-pointer hover:bg-gray-300 ease-in">
                                GITLAB
                            </div>
                            <div className="py-2 h-fit px-3.5 mb-6 mr-6 text-lg bg-gray-100 rounded-md font-semibold text-gray-500 cursor-pointer hover:bg-gray-300 ease-in">
                                NEXT JS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;