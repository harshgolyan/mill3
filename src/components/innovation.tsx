import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { easeInOut } from "motion";

export default function Innovation() {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    // This hook triggers once the element is in view
    const isVisible = useInView(sectionRef, { once: true });

    useEffect(() => {
        if (isVisible) {
            setIsInView(true);
        }
    }, [isVisible]);

    return (
        <div ref={sectionRef}>
            <div className="flex flex-col justify-center items-center h-screen w-full text-center text-[15rem] font-semibold text-white uppercase leading-[14rem] mt-[-15rem]">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{
                        y: isInView ? 0 : 100,
                        opacity: isInView ? 1 : 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 1,
                    }}
                >
                    Crafted
                </motion.div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{
                        y: isInView ? 0 : 100,
                        opacity: isInView ? 1 : 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 2,
                    }}
                    className="relative"
                >
                    <motion.span
                        initial={{ y: 100, opacity: 0 }}
                        animate={{
                            y: isInView ? 0 : 100,
                            opacity: isInView ? 1 : 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 2,
                        }}
                        className="mr-28"
                    >
                        Innovati
                    </motion.span>
                    <motion.span
                        initial={{ rotateZ: 0 }}
                        animate={{
                            rotateZ: isInView ? [180, 0, -180, 0, 180] : 0,
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 1.5,
                            ease: easeInOut,
                        }}
                        className="absolute top-[2.8rem] right-[13.5rem] bg-white min-h-[10.5rem] min-w-px mx-10"
                    ></motion.span>
                    <motion.span
                        initial={{ rotateZ: 45 }}
                        animate={{
                            rotateZ: isInView ? [45, 0, -45, 0, 45] : 45,
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 1.5,
                            ease: easeInOut,
                        }}
                        className="absolute top-[2.8rem] right-[13.5rem] bg-white min-h-[10.5rem] min-w-px mx-10"
                    ></motion.span>
                    <motion.span
                        initial={{ rotateZ: 90 }}
                        animate={{
                            rotateZ: isInView ? [90, 0, -90, 0, 90] : 90,
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 1.5,
                            ease: easeInOut,
                        }}
                        className="absolute top-[2.8rem] right-[13.5rem] bg-white min-h-[10.5rem] min-w-px mx-10"
                    ></motion.span>
                    <motion.span
                        initial={{ rotateZ: 135 }}
                        animate={{
                            rotateZ: isInView ? [135, 0, -135, 0, 135] : 135,
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 1.5,
                            ease: easeInOut,
                        }}
                        className="absolute top-[2.8rem] right-[13.5rem] bg-white min-h-[10.5rem] min-w-px mx-10"
                    ></motion.span>
                    <motion.span
                        initial={{ rotateZ: 180 }}
                        animate={{
                            rotateZ: isInView ? [180, 0, -180, 0, 180] : 180,
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 1.5,
                            ease: easeInOut,
                        }}
                        className="absolute top-[2.8rem] right-[13.5rem] bg-white min-h-[10.5rem] min-w-px mx-10"
                    ></motion.span>
                    <motion.span
                        initial={{ y: 100, opacity: 0 }}
                        animate={{
                            y: isInView ? 0 : 100,
                            opacity: isInView ? 1 : 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 2,
                        }}
                        className="ml-10"
                    >
                        n
                    </motion.span>
                </motion.div>
            </div>
        </div>
    );
}
