"use client";

import { motion } from "framer-motion";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { slideIn } from "@/lib/motion";
import { styles } from "@/lib/styles";
import EarthCanvas from "./canvas/Earth";
import SectionWrapper from "./SectionWrapper";

// Define the form state interface
interface FormState {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_cv326ig",
                "template_pun6mae",
                {
                    from_name: form.name,
                    to_name: "Purnima",
                    from_email: form.email,
                    to_email: "purnimavats6789@gmailcom",
                    message: form.message,
                },
                "ZPJEQjKZwYI6Liejq"
            )
            .then(() => {
                setLoading(false);
                
                alert("Thank you. I will get back to you as soon as possible.");

                setForm({
                    name: "",
                    email: "",
                    message: "",
                });
            })
            .catch((error: string) => {
                setLoading(false);
                console.error(error);
                alert("Something went wrong.");
            });
    };

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-gray-800 bg-black-100 p-8 rounded-2xl"
            >
                
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Name
                        </span>
                        <input
                            required
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-[#1A1F33] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Email
                        </span>
                        <input
                            required
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-[#1A1F33] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Message
                        </span>
                        <textarea
                            required
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className="bg-[#1A1F33] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>

                    <button
                        className="bg-[#1A1F33] cursor-pointer py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                        type="submit"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
