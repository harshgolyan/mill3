import { useState, useEffect } from "react";
import Loader from "./components/loader";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import CTA from "./components/cta";
import Promotions from "./components/promotions";
import Innovation from "./components/innovation";

export default function App() {
    const [showHero, setShowHero] = useState<boolean>(false);

    useEffect(() => {
        if (!showHero) {
            document.body.style.overflow = "hidden"; 
        } else {
            document.body.style.overflow = "visible";
        }
    }, [showHero]);

    return (
        <div className="relative">
            <Loader onComplete={() => setShowHero(true)} />
            <Navbar isVisible={showHero} />
            <Hero isVisible={showHero} />
            <CTA />
            <Promotions />
            <Innovation />
        </div>
    );
}
