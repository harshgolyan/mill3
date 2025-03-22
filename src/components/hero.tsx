import { useRef } from "react";
import { motion, useScroll } from "motion/react";

export default function Hero({ isVisible }: { isVisible: boolean }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const scroll = useScroll();

    console.log("scroll", scroll)

    const handleMouseEnter = () => {
        videoRef.current?.play();
    };

    const handleMouseLeave = () => {
        videoRef.current?.pause();
        videoRef.current!.currentTime = 0.2;
    };

    return (
        <div>
            <motion.div     
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }} 
                transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}    
                className="flex justify-between gap-20 items-center h-screen px-20"
            >
                <div 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave} 
                    className="cursor-pointer bg-[#142a1f] p-10 mt-10"
                >
                    <video 
                        ref={videoRef}
                        src="/moosehead.mp4" 
                        className="h-[30rem] w-[40rem] object-fit" 
                        muted
                        
                    />
                </div>
                <div className="cursor-pointer bg-[#3b0017] p-10 py-24 mt-10">
                    <img src="/cob.jpg"
                    className="h-[23rem] w-[40rem] "
                    />
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }} 
                transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
                className="text-[25rem] uppercase font-bold tracking-[20px] flex text-white flex justify-center items-center mt-[-5rem]"
            >
                    mill3
            </motion.div>
        </div>
    );
}
