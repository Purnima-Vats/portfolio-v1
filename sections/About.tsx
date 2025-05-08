'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const About = () => {
    const tilesRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        gsap.fromTo(
            tilesRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#about-section',
                    start: 'top 80%',
                },
            }
        );
    }, []);

    return (
        <section id="about-section" className="min-h-screen px-8 py-16 bg-[#050816] text-white">
            <h2 className="text-4xl font-bold mb-12 text-center">About Me...</h2>

            <div className="grid grid-cols-3 gap-6">
                {/* My Reads */}
                <div
                    className="col-span-1 rounded-xl border border-white p-4 font-hand bg-[#0a0f1c]"
                    ref={el => {
                        if (el) tilesRef.current[0] = el;
                    }}
                >
                    <h3 className="text-lg mb-2">My Reads</h3>
                </div>

                {/* Overview */}
                <div
                    className="col-span-2 rounded-xl border border-white p-4 font-hand bg-[#0a0f1c]"
                    ref={el => {
                        if (el) tilesRef.current[1] = el;
                    }}
                >
                    <h3 className="text-lg mb-2">Overview</h3>
                </div>

                {/* Hobbies */}
                <div
                    className="col-span-2 rounded-xl border border-white p-4 font-hand bg-[#0a0f1c]"
                    ref={el => {
                        if (el) tilesRef.current[2] = el;
                    }}
                >
                    <h3 className="text-lg mb-2">Hobbies</h3>
                </div>

                {/* Interactive Graph */}
                <div
                    className="col-span-1 rounded-xl border border-white p-4 font-hand bg-[#0a0f1c] flex justify-center items-center"
                    ref={el => {
                        if (el) tilesRef.current[3] = el;
                    }}
                >
                    <h3 className="text-lg">Interactive Graph</h3>
                </div>
            </div>
        </section>
    );
};

export default About;
