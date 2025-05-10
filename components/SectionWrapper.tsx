// components/SectionWrapper.tsx
"use client";

import { motion } from "framer-motion";
import { ComponentType } from "react";
import { styles } from "@/lib/styles";
import { staggerContainer } from "@/lib/motion";

const SectionWrapper = <P extends object>(
    Component: ComponentType<P>,
    idName: string
) => {
    const HOC = (props: P) => (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className="hash-span" id={idName}>
                &nbsp;
            </span>
            <Component {...props} />
        </motion.section>
    );

    return HOC;
};

export default SectionWrapper;
