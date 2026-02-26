import "./ChatHeader.css";

export default function ChatHeader({ room }) {
  return (
    <header className="chat-header">
      <div className="chat-header__avatar">
        <img src={room.image_url} alt={room.name} />
      </div>
      <div className="chat-header__info">
        <h2 className="chat-header__name">{room.name}</h2>
        <p className="chat-header__participants">
          {room.participant.map((p) => p.name).join(", ")}
        </p>
      </div>
      <div className="chat-header__actions">
        <button className="icon-btn" title="Search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
        <button className="icon-btn" title="More options">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>
      </div>
    </header>
  );
}