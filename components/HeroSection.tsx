import Image from 'next/image'

const HeroSection = () => {
    return (
        <div className="h-full md:h-screen mt-16 flex flex-col md:flex-row bg-[#050816] relative ">
            {/* Neural Network Background */}
            <div className="h-screen flex flex-col justify-center w-screen md:w-1/2 md:m-5 text-white items-center relative z-10">
                <div className='flex flex-col px-1'>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">Hi, I am <br/>
                        <span className="text-violet-500">Purnima Vats</span>
                    </h1>
                    <p className="text-2xl lg:text-4xl font-semibold mt-3">I am a <span className="bg-violet-500 rounded-xl px-2">Frontend Developer</span> </p>
                    <button className='px-4 py-2 flex items-center justify-center bg-violet-500 rounded-xl mt-8 w-2/3 lg:w-1/2 h-10 md:h-12
                    text-md
                    md:text-lg font-semibold hover:cursor-pointer hover:border-violet-500 hover:bg-violet-600 hover:border-2'>
                        Download Resume
                    </button>
                </div>
            </div>
            <div className="w-screen px-4 md:px-0 md:w-3/7 lg:w-1/2 flex justify-center items-center md:h-calc(100vh-64px) py-5  md:mt-24 relative z-10">
                <Image 
                    src="/assets/images/hero.jpg" 
                    className="rounded-xl border-3 border-violet-500"
                    width={450} 
                    height={450} 
                    alt="hero" 
                />
            </div>
        </div>
    )
}

export default HeroSection;
