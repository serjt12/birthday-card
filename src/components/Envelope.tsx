import { useState } from "react";
import "./Envelope.css";

interface EnvelopeProps {
    onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
    const [isOpening, setIsOpening] = useState(false);

    const handleClick = () => {
        if (isOpening) return;
        setIsOpening(true);

        setTimeout(() => {
            onOpen();
        }, 1200);
    };

    return (
        <div className="envelope-wrapper" onClick={handleClick}>
            <div className={`envelope ${isOpening ? "open" : ""}`}>
                <div className="flap">
                    <div className="seal" />
                </div>
                <div className="body" />
                {!isOpening && (
                    <p className="click-message">Haz clic para abrir 💌</p>
                )}
            </div>
        </div>
    );
}
