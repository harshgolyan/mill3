import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Loader from "./components/loader";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import CTA from "./components/cta";
import Promotions from "./components/promotions";
import Innovation from "./components/innovation";

export default function App() {
    const [showHero, setShowHero] = useState<boolean>(false);
    const heroRef = useRef(null);
    const ctaRef = useRef(null);
    const promoRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = showHero ? "visible" : "hidden";
    }, [showHero]);

    const { scrollY } = useScroll();

    const { scrollYProgress: heroProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    // const { scrollYProgress: ctaProgress } = useScroll({
    //     target: ctaRef,
    //     offset: ["start 90%", "end 10%"],
    // });

    const { scrollYProgress: promoProgress } = useScroll({
        target: promoRef,
        offset: ["start 200%", "end 0%"],
    });

    const heroScale = useTransform(heroProgress, [0, 1], [1, 0.8]);
    const heroOpacity = useTransform(heroProgress, [0.8, 1], [1, 0]);

    const slowScrollY = useTransform(scrollY, (value) => value * 0.2);
    const ctaScale = useTransform(slowScrollY, [0, 500], [0.8, 1]); 
    const ctaOpacity = useTransform(slowScrollY, [0, 300], [0, 1]);

    const promoFastY = useTransform(promoProgress, [0, 0.9, 1], [300, -600, -1200]);
    const promoZIndex = useTransform(promoProgress, [0, 1], [1, 50]);

    return (
        <div className="relative">
            <Loader onComplete={() => setShowHero(true)} />
            <div className="absolute w-full top-0 left-0 z-50">
                <Navbar isVisible={showHero} />
            </div>

            <motion.div
                ref={heroRef}
                style={{ scale: heroScale, opacity: heroOpacity }}
                className="relative z-10"
            >
                <Hero isVisible={showHero} />
            </motion.div>

            <motion.div
                ref={ctaRef}
                style={{ scale: ctaScale, opacity: ctaOpacity }}
                className="relative z-0"
            >
                <CTA />
            </motion.div>

            <motion.div
                ref={promoRef}
                style={{ y: promoFastY, zIndex: promoZIndex }}
                className="relative w-full h-screen"
            >
                <Promotions />
            </motion.div>

            <div className="relative w-full">
                <Innovation />
            </div>
        </div>
    );
}
