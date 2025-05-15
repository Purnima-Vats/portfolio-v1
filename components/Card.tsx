import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/motion'

const Card = ({ classname, children }: PropsWithChildren<{
    classname?: string
}>) => {
    return (
        <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)} 
            className={twMerge("bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6", classname)}>
            <div
                className='absolute inset-0 -z-10 opacity-5'
                style={{
                    backgroundImage: "url('/assets/grainImage.png')",
                }}
            ></div>
            {children}
        </motion.div>
    )
}

export default Card