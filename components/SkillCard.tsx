import { techStack } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Card from "./Card";
import CardHeader from "./CardHeader";

type SkillCategory = keyof typeof techStack;

const SkillCard = ({ type }: { type: SkillCategory }) => {
    const titleMap = {
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend",
        toolsAndServices: "Tools & Services",
    } as const;
    return (
        <>
            <Card classname="w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <CardHeader
                    title={titleMap[type]}
                    description=""
                    className="col-span-full text-violet-200"
                />
                {techStack[type].map((el, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            },
                            hidden: { opacity: 1, y: 80 },
                        }}
                        className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
                    >
                        <Image
                            alt=""
                            src={el.link}
                            className="w-12"
                            width={40}
                            height={40}
                        />
                        <h4 className="text-md ml-4 text-black">{el.name}</h4>
                    </motion.div>
                ))}
            </Card>
        </>
    );
};

export default SkillCard;
