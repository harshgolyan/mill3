"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const leftY = useTransform(scrollYProgress, [0, 1], [100, -300]);
    const centerY = useTransform(scrollYProgress, [0, 1], [-100, 300]);
    const rightY = useTransform(scrollYProgress, [0, 1], [100, -300]);

    return (
        <div className="relative w-full h-auto flex justify-center overflow-hidden -z-10">
            <div className="h-[200vh] w-full absolute top-0 left-0"></div>
            <div ref={ref} className="grid grid-cols-3 gap-4 w-full min-h-screen">
                <motion.div 
                    style={{ y: leftY }} 
                    className="flex flex-col items-center -translate-x-20"
                >
                    <div>
                        <video src="/summer-camp.mp4" muted autoPlay loop className="m-5 rounded-xl" />
                    </div>
                    <div>
                        <img src="/saint-urban.jpg" className="m-5 rounded-xl" />
                    </div>
                    <div>
                        <img src="/myel.jpg" className="m-5 rounded-xl" />
                    </div>
                </motion.div>
                <motion.div 
                    style={{ y: centerY }} 
                    className="flex flex-col items-center scale-110"
                >
                    <div>
                        <video src="/cartier.mp4" muted autoPlay loop className="m-5 rounded-xl" />
                    </div>
                    <div>
                        <video src="/thunder-lotus.mp4" muted autoPlay loop className="m-5 rounded-xl" />
                    </div>
                    <div>
                        <video src="/ventriloc.mp4" muted autoPlay loop className="m-5 rounded-xl" />
                    </div>
                </motion.div>
                <motion.div 
                    style={{ y: rightY }} 
                    className="flex flex-col items-center translate-x-20"
                >
                    <div>
                        <video src="/b2bgo.mp4" muted autoPlay loop className="m-5 rounded-xl" />
                    </div>
                    <div>
                        <video src="/hanai-world.mp4" muted autoPlay loop className="m-5 rounded-xl" />
                    </div>
                    <div>
                        <video src="/noel.mp4" muted autoPlay loop className="m-5 rounded-xl" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
