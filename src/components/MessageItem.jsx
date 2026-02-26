import "./MessageItem.css";

function formatTime(timestamp) {
  if (!timestamp) return "";
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function TextMessage({ message }) {
  return <p className="msg-text">{message}</p>;
}

function ImageMessage({ message, caption }) {
  return (
    <div className="msg-media">
      <img src={message} alt={caption || "image"} className="msg-image" />
      {caption && <p className="msg-caption">{caption}</p>}
    </div>
  );
}

function VideoMessage({ message, caption }) {
  return (
    <div className="msg-media">
      <video controls className="msg-video">
        <source src={message} />
        Your browser does not support video.
      </video>
      {caption && <p className="msg-caption">{caption}</p>}
    </div>
  );
}

function PdfMessage({ message, filename }) {
  return (
    <a href={message} target="_blank" rel="noopener noreferrer" className="msg-pdf">
      <div className="msg-pdf__icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
          <polyline points="14 2 14 8 20 8" fill="none" stroke="white" strokeWidth="1.5" />
          <text x="6" y="18" fontSize="5" fill="white" fontWeight="bold">PDF</text>
        </svg>
      </div>
      <div className="msg-pdf__info">
        <span className="msg-pdf__name">{filename || "Document.pdf"}</span>
        <span className="msg-pdf__label">PDF Document · Tap to open</span>
      </div>
    </a>
  );
}

function MessageContent({ comment }) {
  switch (comment.type) {
    case "text":
      return <TextMessage message={comment.message} />;
    case "image":
      return <ImageMessage message={comment.message} caption={comment.caption} />;
    case "video":
      return <VideoMessage message={comment.message} caption={comment.caption} />;
    case "pdf":
      return <PdfMessage message={comment.message} filename={comment.filename} />;
    default:
      return <TextMessage message={comment.message} />;
  }
}

export default function MessageItem({ comment, isOwn, sender }) {
  return (
    <div className={`message-row ${isOwn ? "message-row--own" : "message-row--other"}`}>
      {!isOwn && (
        <div className="message-avatar">
          <span>{sender?.name?.[0]?.toUpperCase() || "?"}</span>
        </div>
      )}
      <div className={`message-bubble ${isOwn ? "bubble--own" : "bubble--other"}`}>
        {!isOwn && sender && (
          <span className="bubble-sender">{sender.name}</span>
        )}
        <MessageContent comment={comment} />
        <span className="bubble-time">{formatTime(comment.timestamp)}</span>
      </div>
    </div>
  );
}