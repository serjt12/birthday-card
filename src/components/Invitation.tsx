import "./Invitation.css";

interface InvitationProps {
    onConfirm: () => void;
}

export default function Invitation({ onConfirm }: InvitationProps) {
    return (
        <div className="invitation-card">
            <h2 className="invitation-title">🎉 Invitación Especial 🎉</h2>
            <p>
                Tenemos el gusto de invitarte a la celebración del cumpleaños de{" "}
                <strong>Sara</strong>.
            </p>
            <p>
                📅 <strong>Viernes 8 de agosto</strong>
            </p>
            <p>
                👗 <strong>Dress code:</strong> Como gustes
            </p>
            <p>
                📍 <strong>Lugar:</strong> Secreto... por ahora 😉
            </p>
            <p>
                <strong>Asistiras?</strong>
            </p>
            <div className="button-container">
                <button
                    className="button invitation-button"
                    onClick={onConfirm}
                >
                    ¡Claro que sí!
                </button>
                <button className="button button-otro" onClick={onConfirm}>
                    ¡Claro que sí pero de otro color y mas grande!
                </button>
            </div>
        </div>
    );
}
