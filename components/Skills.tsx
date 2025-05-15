"use client"

import { textVariant } from "@/lib/motion";
import { styles } from "@/lib/styles";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SkillCard from "./SkillCard";

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant(0)}>
                <p className={`${styles.sectionSubText}`}>
                    I can say I’m quite good at
                </p>
                <h2 className={`${styles.sectionHeadText}`}>
                    Tech Skills.
                </h2>
            </motion.div>

            <motion.div className="flex flex-wrap mt-8 justify-between gap-y-6">
                <SkillCard type="languages" />
                <SkillCard type="frontend" />
                <SkillCard type="backend" />
                <SkillCard type="toolsAndServices" />
            </motion.div>
        </>
    );
};

export default SectionWrapper(Tech, "skills");