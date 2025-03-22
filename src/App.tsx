
import { useState } from "react";
import Loader from "./components/loader";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function App() {
    const [showHero, setShowHero] = useState<boolean>(false);

    return (
        <div className="relative">
            <Loader onComplete={() => setShowHero(true)} />
            <Navbar isVisible={showHero} />
            <Hero isVisible={showHero} />
        </div>
    );
}
