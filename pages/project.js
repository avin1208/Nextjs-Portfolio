import React from 'react';

const Project = () => {
    return (
        <div className="bg-white py-80">
            <div className="max-w-screen-2xl m-auto w-11/12 mt-24">
                <div className="mb-36">
                    <span className="block text-5xl uppercase tracking-wider font-medium text-center mb-14 relative text-black">
                        PROJECTS
                    </span>
                    <span className="absolute content-none h-6 mt-20 w-35 bg-yellow-400 left-2/4 rounded-md mb-6 ">

                    </span>
                    <div className="block text-center text-gray-600 text-lg max-w-7xl m-auto pt-48 mt-40">
                        Here you will find some of the personal and clients projects that I created with each project containing its own case study.
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-48">
                        <div className="overflow-hidden">
                            <img className="w-4/5 h-full rounded-r-sm block object-cover" src='https://camo.githubusercontent.com/dd4c0cf5c6e2eeedef59e83f28e614f62bd2c408143e6264f03b5ab589f34a8f/68747470733a2f2f6c7563617370756c6c696573652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032302f30392f65636f6d6d657263652d322e6a7067' alt='icon' width={240} height={160} />
                        </div>
                        <div className="flex justify-center flex-col items-start">
                            <h3 className="font-bold text-4xl tracking-wider mb-12">
                                CRWN-CLOTHING
                            </h3>
                            <p className="text-lg text-gray-400 max-w-5xl mb-24">
                                Crwn-Clothing is a web-app that I created where people can shop the clothes of their favorite t-shirt, jeans or other products and can be part of the conversation.
                            </p>
                            <button className="bg-yellow-400 text-black uppercase tracking-wider inline-block font-bold rounded-md transition duration-150 py-12 px-28 text-base border-none cursor-pointer hover:translate-y-4 shadow-lg shadow-zinc-200 ">
                                Case Study
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-48">
                        <div className="overflow-hidden">
                            <img className="w-4/5 h-full rounded-r-sm block object-cover" src='https://previews.123rf.com/images/mariusz_prusaczyk/mariusz_prusaczyk1409/mariusz_prusaczyk140900558/32094470-3d-word-portfolio-on-white-background.jpg' alt='icon' width={240} height={160} />
                        </div>
                        <div className="flex justify-center flex-col items-start">
                            <h3 className="font-bold text-4xl tracking-wider mb-12">
                                PORTFOLIO
                            </h3>
                            <p className="text-lg text-gray-400 max-w-5xl mb-24">
                                In this project i showcase My Self and My Skills in ui building and added some beautiful Animations.
                            </p>
                            <button className="bg-yellow-400 text-black uppercase tracking-wider inline-block font-bold rounded-md transition duration-150 py-12 px-28 text-base border-none cursor-pointer hover:translate-y-4 shadow-lg shadow-zinc-200 ">
                                Case Study
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-48">
                        <div className="overflow-hidden">
                            <img className="w-4/5 h-full rounded-r-sm block object-cover" src='https://static.wixstatic.com/media/63044d_236bed0a9614460faa6a09fea16fb7c7~mv2.jpeg/v1/fit/w_2500,h_1330,al_c/63044d_236bed0a9614460faa6a09fea16fb7c7~mv2.jpeg' alt='icon' width={240} height={160} />
                        </div>
                        <div className="flex justify-center flex-col items-start">
                            <h3 className="font-bold text-4xl tracking-wider mb-12">
                                WINNER YOGA
                            </h3>
                            <p className="text-lg text-gray-400 max-w-5xl mb-24">
                                Winner yoga is a web-app that I created where people can shop the clothes of their favorite gym costume and can be part of the conversation.
                            </p>
                            <button className="bg-yellow-400 text-black uppercase tracking-wider inline-block font-bold rounded-md transition duration-150 py-12 px-28 text-base border-none cursor-pointer hover:translate-y-4 shadow-lg shadow-zinc-200 ">
                                Case Study
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;