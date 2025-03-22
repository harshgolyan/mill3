import { motion } from "framer-motion";

export default function Navbar({ isVisible }: { isVisible: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }} 
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }} 
            className="fixed top-0 left-0 w-full py-5 px-10 uppercase text-[1.2rem] text-white 
            flex justify-around items-center bg-black"
        >
            <div className="cursor-pointer">projects</div>
            <div className="cursor-pointer">about</div>
            <div className="cursor-pointer">contact</div>
            <div className="cursor-pointer">[fr]</div>
        </motion.div>
    );
}
