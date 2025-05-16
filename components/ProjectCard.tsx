"use client";

import { fadeIn } from "@/lib/motion";
import { github, live } from "@/public/assets";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import ProjectDialog from "./ProjectDialog";

type ProjectCardProps = {
    index: number;
    name: string;
    description: string;
    tags: {
        name: string;
        color: string;
    }[];
    image: StaticImageData;
    source_code_link: string;
    live_link: string;
    longDescription?: string;
    features?: string[];
    technologies?: string[];
};

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    live_link,
    longDescription,
    features,
    technologies,
}: ProjectCardProps) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    // const handleCardClick = (e: React.MouseEvent) => {
    //     // Only open dialog if the click wasn't on a link
    //     if (!(e.target as Element).closest("a")) {
    //         openDialog();
    //     }
    // };

    const openDialog = () => {
        if (
            typeof window !== "undefined" &&
            window.matchMedia("(min-width: 768px)").matches
        ) {
            setIsDialogOpen(true);
        }
    };

    const handleCardClick = (e: React.MouseEvent) => {
        if (!(e.target as Element).closest("a")) {
            openDialog();
        }
    };

    return (
        <>
            <motion.div
                variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                className="bg-gray-800 sm:w-[360px] rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6 cursor-pointer hover:scale-105 hover:transition-all hover:duration-300"
                onClick={handleCardClick}
            >
                <div className="relative w-full h-[230px]">
                    <Image
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px] line-clamp-4">
                        {description}
                    </p>
                </div>

                <div className="flex gap-4 mt-4">
                    {/* GitHub Button */}
                    <a
                        href={source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-white/20 text-black bg-white hover:bg-white/80 
                        transition-colors duration-200 px-4 py-2 rounded-full text-sm font-medium"
                    >
                        <Image
                            src={github}
                            alt="github"
                            className="w-5 h-5 object-contain"
                            width={20}
                            height={20}
                        />
                        <p className="hidden sm:block">Source Code</p>
                    </a>

                    {/* Live Demo Button */}
                    <a
                        href={live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-red-400 text-white-400 bg-[#F25C54] hover:bg-red-500 transition-colors duration-200 px-4 py-2 rounded-full text-sm font-medium w-fit"
                    >
                        <Image
                            src={live}
                            alt="live"
                            className="w-5 h-5 object-contain"
                            width={20}
                            height={20}
                        />
                        <p className="hidden sm:block">Live Demo</p>
                    </a>
                </div>
            </motion.div>

            {/* Project Dialog */}
            <ProjectDialog
                isOpen={isDialogOpen}
                onClose={closeDialog}
                project={{
                    name,
                    description,
                    tags,
                    image,
                    source_code_link,
                    live_link,
                    longDescription,
                    features,
                    technologies,
                }}
            />
        </>
    );
};

export default ProjectCard;
