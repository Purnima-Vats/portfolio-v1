import { Download } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="h-full md:h-screen mt-16 flex flex-col md:flex-row bg-[#050816] relative ">
            {/* Neural Network Background */}
            <div className="h-screen flex flex-col justify-center w-screen md:w-1/2 md:m-5 text-white items-center relative z-10">
                <div className="flex flex-col px-1">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">
                        Hi, I am <br />
                        <span className="text-violet-500">Purnima Vats</span>
                    </h1>
                    <p className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mt-2">
                        I am a{" "}
                        <span className=" underline rounded-xl px-2">
                            Web Developer
                        </span>{" "}
                    </p>
                    <div className="flex flex-col md:flex-row gap-3 md:items-center mt-8">
                        
                        <button
                            className="gap-2 px-3 py-1.5 flex items-center justify-center bg-violet-500 rounded-xl w-2/3 lg:w-1/2 h-10 md:h-12
                        text-md
                        md:text-lg font-semibold hover:cursor-pointer hover:border-violet-500 hover:bg-violet-600 hover:border-2"
                        >
                            <a
                            target="_blank"
                            className="flex items-center gap-2"
                            href="https://drive.google.com/file/d/1c6Jg0cTSLlrHAtMXr9vHs3Bdn48Pe_7M/view?usp=sharing">
                                <p>Download CV</p>
                                <Download />
                            </a>
                        </button>
                        <div className="flex gap-3 mt-2">
                            <button className="bg-white w-12 h-12 flex items-center justify-center rounded-xl cursor-pointer">
                                <a
                                    href="https://x.com/PurnimaaVats"
                                    target="_blank"
                                >
                                    <Image
                                        src="/assets/x.png"
                                        width={40}
                                        height={40}
                                        alt="x"
                                    />
                                </a>
                            </button>
                            <button className="bg-white w-12 h-12 flex items-center justify-center rounded-xl cursor-pointer">
                                <a
                                    href="https://github.com/Purnima-Vats"
                                    target="_blank"
                                >
                                    <Image
                                        className="alter"
                                        src="/assets/github.png"
                                        width={40}
                                        height={40}
                                        alt="github"
                                    />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen px-4 md:px-0 md:w-3/7 lg:w-1/2 flex justify-center items-center md:h-calc(100vh-64px) py-5  md:mt-24 relative z-10">
                <Image
                    src="/assets/hero.jpg"
                    className="rounded-xl border-3 border-violet-500"
                    width={450}
                    height={450}
                    alt="hero"
                />
            </div>
        </div>
    );
};

export default HeroSection;
