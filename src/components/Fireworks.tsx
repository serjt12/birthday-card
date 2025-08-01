import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Fireworks() {
    useEffect(() => {
        const duration = 5 * 1000;
        const end = Date.now() + duration;

        const interval = setInterval(() => {
            if (Date.now() > end) return clearInterval(interval);
            confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 },
            });
        }, 250);
    }, []);

    return null;
}
