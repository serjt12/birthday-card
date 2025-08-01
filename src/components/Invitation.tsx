import "./Invitation.css";

interface InvitationProps {
    onConfirm: () => void;
}

export default function Invitation({ onConfirm }: InvitationProps) {
    return (
        <div className="invitation-card">
            <h2 className="invitation-title">🎉 Invitación Especial 🎉</h2>
            <p>
                El <strong>viernes 8 de agosto</strong> celebramos la vida de mi
                persona favorita, y me encantaría que formaras parte de este
                momento tan especial.
            </p>
            <p>
                📅 <strong>Fecha:</strong> Viernes 8 de agosto
            </p>
            <p>
                🕖 <strong>Hora:</strong> 7:30 p.m.
            </p>
            <p>
                👗 <strong>Dress code:</strong> Como gustes
            </p>
            <p>
                📍 <strong>Lugar:</strong> Secreto... por ahora 😉
            </p>

            <p className="rsvp-question">
                ¿Podemos contar contigo, <strong>Sara</strong>? 💖
            </p>

            <div className="button-container">
                <button className="invitation-button" onClick={onConfirm}>
                    ¡Claro que sí!
                </button>
                <button className="invitation-button alt" onClick={onConfirm}>
                    ¡Claro que sí pero de otro color y mas grande!
                </button>
            </div>
        </div>
    );
}
