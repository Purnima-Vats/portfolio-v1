"use client";

import { textVariant } from "@/lib/motion";
import { styles } from "@/lib/styles";
import { motion } from "framer-motion";
import Image from "next/image";
import Card from "./Card";
import SectionWrapper from "./SectionWrapper";

const About = () => {
    return (
        <>
            <div className="container">
                <motion.div variants={textVariant(0)}>
                    <p className={styles.sectionSubText}>Introduction</p>
                    <h2 className={styles.sectionHeadText}>About Me.</h2>
                </motion.div>

                <motion.div className="mt-8 flex flex-col lg:flex-row gap-8 ">
                    <Card classname="h-full lg:h-[380px] xl:h-[320px] w-full lg:w-2/3 text-lg p-6">
                        {/* <CardHeader
                            title="Overview"
                            description="Know more about me"
                        /> */}
                        <p>
                            I&apos;m a skilled <span className="italic text-[#FFAE03]">software developer</span> with a solid
                            foundation in TypeScript and JavaScript, and deep
                            expertise in frameworks like React, Next.js, &
                            Node.js. I specialize in building
                            <span className="italic text-[#FFAE03]"> fast, scalable, and user-friendly</span> web
                            applications. <br /> <br /> 
                            I take a <span className="italic text-[#FFAE03]"> collaborative, user-focused </span> 
                            approach to every
                            project, turning complex ideas into
                            real-world solutions. Constantly learning and
                            evolving with the latest web technologies, I strive
                            to create digital experiences that are both
                            <span className="italic text-[#FFAE03]"> impactful and enjoyable</span>. 
                            <br/> <br/>
                            Let’s <span className="italic text-[#FFAE03]">connect</span> and bring
                            your ideas to life.
                        </p>
                    </Card>

                    <Card classname="h-full md:h-[380px] xl:h-[320px] w-full p-0 lg:w-1/3 cursor-pointer ">
                        <Image
                            src="/assets/images/map.png"
                            width={500}
                            height={500}
                            alt="hero"
                            className="w-full h-full object-cover"
                        />
                    </Card>
                </motion.div>
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
