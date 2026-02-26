import { useEffect, useRef } from "react";
import MessageItem from "./MessageItem";
import "./MessageList.css";

export default function MessageList({ comments, currentUser, participantMap }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [comments]);

  return (
    <div className="message-list">
      <div className="message-list__inner">
        {comments.map((comment) => (
          <MessageItem
            key={comment.id}
            comment={comment}
            isOwn={comment.sender === currentUser}
            sender={participantMap[comment.sender]}
          />
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}