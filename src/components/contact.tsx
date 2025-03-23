import { motion } from "motion/react";

export default function Contact () {
    return (
        <>
            <div className="flex justify-between items-center h-screen w-full px-20 bg-white text-black">
                <div className="text-xl underline uppercase">Contact</div>
                <div className="flex flex-col text-[4rem] font-medium uppercase justify-end">
                    <span> 
                        ┏━
                        <motion.span 
                            initial={{ x: 0 }}
                            animate={{ x: 100 }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="pr-64  bg-black text-white mx-2 hover:text-black hover:bg-white transition duration-300"
                        >
                            your{" "}
                        </motion.span>
                        website
                    </span>
                    <span>
                        theme
                        <motion.span 
                            initial={{ x: 0 }}
                            animate={{ x: 1000 }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="pr-44 bg-black text-white mx-2 hover:text-black hover:bg-white transition duration-300"
                        >
                            {" "}is boring
                        </motion.span>
                        ??
                    </span>
                    <span>no worries... let's talk.</span>
                </div>
            </div>
        </>
    );
}
