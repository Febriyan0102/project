import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import "./ChatContainer.css";

export default function ChatContainer({ room, comments, currentUser }) {
  const participantMap = {};
  room.participant.forEach((p) => {
    participantMap[p.id] = p;
  });

  return (
    <div className="chat-wrapper">
      <div className="chat-container">
        <ChatHeader room={room} />
        <MessageList
          comments={comments}
          currentUser={currentUser}
          participantMap={participantMap}
        />
        <ChatInput />
      </div>
    </div>
  );
}