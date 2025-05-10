"use client";

import { textVariant } from "@/lib/motion";
import { styles } from "@/lib/styles";
import { motion } from "framer-motion";
import Image from "next/image";
import Card from "./Card";
import SectionWrapper from "./SectionWrapper";
import CardHeader from "./CardHeader";


const About = () => {
    return (
        <>
            <div className="container">
                <motion.div variants={textVariant(0)}>
                    <p className={styles.sectionSubText}>Introduction</p>
                    <h2 className={styles.sectionHeadText}>About Me.</h2>
                </motion.div>

                <motion.div className="mt-8 flex flex-col lg:flex-row gap-8">
                    <Card classname="h-full md:h-[320px] w-full lg:w-2/3">
                        <CardHeader
                            title="Overview"
                            description="Know more about me"
                        />
                        <div>
                        I&apos;m a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Next, Node.js, and Three.js. I&apos;m a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let&apos;s work together to bring your ideas to life!
                        </div>
                    </Card>

                    <Card classname="h-full md:h-[320px] w-full p-0 lg:w-1/3">
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
