import { easeInOut } from "motion";
import { motion } from "motion/react";

export default function Innovation() {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen w-full text-center text-[15rem] font-semibold text-white uppercase leading-[14rem]">
                <div>Crafted</div>
                <div className="relative">
                    <span className="mr-28">Innovati</span>
                    <motion.span 
                        initial={{
                            rotateZ: 0
                        }}
                        animate={{
                            rotateZ: [180, 0, -180, 0, 180]
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 1.5,
                            ease: easeInOut
                        }}
                        className="absolute top-[2.8rem] right-[13.5rem] bg-white min-h-[10.5rem] min-w-px mx-10">    
                    </motion.span>
                    <motion.span 
                        initial={{
                            rotateZ: 45
                        }}
                        animate={{
                            rotateZ: [45, 0, -45, 0, 45]
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 1.5, // 1.5 seconds delay after each repeat
                            ease: easeInOut
                        }}
                        className="absolute top-[2.8rem] right-[13.5rem] bg-white min-h-[10.5rem] min-w-px mx-10">    
                    </motion.span>
                    <motion.span 
                        initial={{
                            rotateZ: 90
                        }}
                        animate={{
                            rotateZ: [90, 0, -90, 0, 90]
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 1.5, // 1.5 seconds delay after each repeat
                            ease: easeInOut
                        }}
                        className="absolute top-[2.8rem] right-[13.5rem] bg-white min-h-[10.5rem] min-w-px mx-10">    
                    </motion.span>
                    <motion.span 
                        initial={{
                            rotateZ: 135
                        }}
                        animate={{
                            rotateZ: [135, 0, -135, 0, 135]
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 1.5, // 1.5 seconds delay after each repeat
                            ease: easeInOut
                        }}
                        className="absolute top-[2.8rem] right-[13.5rem] bg-white min-h-[10.5rem] min-w-px mx-10">    
                    </motion.span>
                    <motion.span 
                        initial={{
                            rotateZ: 180
                        }}
                        animate={{
                            rotateZ: [180, 0, -180, 0, 180]
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 1.5, // 1.5 seconds delay after each repeat
                            ease: easeInOut
                        }}
                        className="absolute top-[2.8rem] right-[13.5rem] bg-white min-h-[10.5rem] min-w-px mx-10">    
                    </motion.span>
                    <span className="ml-10">n</span>
                </div>
            </div>
        </>
    );
}
