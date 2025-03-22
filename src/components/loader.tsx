import { motion } from "motion/react";

export default function Loader({ onComplete }: {
    onComplete: () => void;
}) {

    const containerVariants = {
        hidden: { y: 0 },
        visible: { 
            y: "-100%",
            transition: { duration: 0.5, delay: 3 },
        }
    };

    const letterVariants = {
        hidden: { y: "50%", opacity: 0, rotate: 50 },
        visible: (i: number) => ({
            y: "0%",
            opacity: 1,
            rotate: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.5 + i * 0.2
            }
        })
    };

    const text = ["M", "I", "L", "L", "3"];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            onAnimationComplete={() => onComplete ? onComplete() : null}
            className="flex justify-center items-center h-screen w-full top-0 bg-yellow-300 z-20 absolute"
        >
            <motion.span className="text-[25rem] uppercase font-bold tracking-[20px] flex">
                {text.map((char, index) => (
                    <motion.div key={index} className="overflow-hidden">
                        <motion.span 
                            custom={index} 
                            variants={letterVariants} 
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    </motion.div>
                ))}
            </motion.span>
        </motion.div>
    );
}
