import { useState } from "react";
import Envelope from "./components/Envelope";
import Invitation from "./components/Invitation";
import Confirmation from "./components/Confirmation";
import Fireworks from "./components/Fireworks";

function App() {
    const [opened, setOpened] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    return (
        <>
            {!opened && <Envelope onOpen={() => setOpened(true)} />}
            {opened && !confirmed && (
                <Invitation onConfirm={() => setConfirmed(true)} />
            )}
            {confirmed && (
                <>
                    <Confirmation />
                    <Fireworks />
                </>
            )}
        </>
    );
}

export default App;
