import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Promotions() {
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest);
    });

    return (
        <>
            <motion.div className="flex h-screen w-full bg-black justify-center items-center text-white text-[10rem] mt-[-5rem]">
                <div className="relative">
                    <img src="/habitation.jpg" alt="" className="w-full h-auto" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <video
                            src="/home.mp4"
                            autoPlay
                            loop
                            muted
                            className="h-[40rem] w-[60rem] rounded-xl m-4"
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
}
