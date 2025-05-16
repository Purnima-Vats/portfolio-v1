"use client";

import { github, live } from "@/public/assets";
import { X } from "@phosphor-icons/react";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";

type ProjectDialogProps = {
    isOpen: boolean;
    onClose: () => void;
    project: {
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
};

const ProjectDialog = ({ isOpen, onClose, project }: ProjectDialogProps) => {
    // Prevent body scrolling when dialog is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup when component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center pt-20 pb-16 ">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Dialog content - fixed height with top/bottom margins */}
            <div className="relative bg-gray-800 rounded-xl w-full max-w-2xl h-[calc(100vh-128px)] flex flex-col overflow-hidden mx-4">
                {/* Close button - always visible */}
                <button
                    onClick={onClose}
                    className="cursor-pointer absolute top-4 right-4 z-10 rounded-full px-2 py-2 bg-gray-700 text-white/90 text-sm"
                >
                    <X size={16} />
                </button>
                
                {/* Scrollable content container */}
                <div className="flex-1 overflow-y-auto scrollbar-hide">
                    {/* Top section: Image */}
                    <div className="w-full h-64 md:h-90 relative ">
                        <Image
                            src={project.image}
                            alt={project.name}
                            className="object-cover scale-105 w-full h-full "
                            fill
                        />
                    </div>
                    
                    {/* Content section */}
                    <div className="p-6 flex flex-col">
                        {/* Project Info */}
                        <div className="mb-6">
                            <h2 className="text-white text-2xl font-bold mb-4">
                                {project.name}
                            </h2>
                            
                            <h3 className="text-lg font-semibold text-white/90 mb-2">
                                Overview
                            </h3>
                            <p className="text-white/70">
                                {project.longDescription || project.description}
                            </p>
                        </div>

                        {project.features && (
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-white/90 mb-2">
                                    Key Features
                                </h3>
                                <ul className="list-disc list-inside text-white/70 space-y-1">
                                    {project.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Tags/Technologies */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-white/90 mb-2">
                                Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies
                                    ? project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-white/10 px-3 py-1 rounded-full text-sm text-white/80"
                                        >
                                            {tech}
                                        </span>
                                    ))
                                    : project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 rounded-full text-sm bg-[#ffae10]/10 text-[#ffae10]"
                                            style={{ backgroundColor: tag.color }}
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                            </div>
                        </div>
                        
                        {/* Action buttons at the bottom */}
                        <div className="mt-auto flex flex-row space-x-4">
                            <a
                                href={project.live_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-1/2 inline-flex items-center justify-center gap-2 border border-red-400 text-white bg-[#F25C54] hover:bg-red-500 
                                transition-colors duration-200 px-4 py-3 rounded-full font-medium text-sm"
                            >
                                <Image
                                    src={live}
                                    alt="live"
                                    className="w-5 h-5 object-contain"
                                    width={20}
                                    height={20}
                                />
                                Live Demo
                            </a>

                            <a
                                href={project.source_code_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-1/2 inline-flex items-center justify-center gap-2 border border-white/20 text-black bg-white hover:bg-white/80 
                                transition-colors duration-200 px-4 py-3 rounded-full font-medium text-sm"
                            >
                                <Image
                                    src={github}
                                    alt="github"
                                    className="w-5 h-5 object-contain"
                                    width={20}
                                    height={20}
                                />
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDialog;