"use client";

import { textVariant } from "@/lib/motion";
import ProjectCard from "./ProjectCard";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { styles } from "@/lib/styles";
import { projects } from "@/lib/constants";

// Note: Make sure to update your project data in constants.ts to include any additional fields
// like longDescription, features, and technologies if you want to display them in the dialog

const Projects = () => {
    return (
        <>
            <motion.div variants={textVariant(0)}>
                <p className={styles.sectionSubText}>My Work</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>

            <div className="mt-20 flex flex-wrap justify-center lg:justify-start gap-7">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} index={index}/>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Projects, "projects");
