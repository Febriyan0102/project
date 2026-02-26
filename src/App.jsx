import { useState, useEffect } from "react";
import ChatContainer from "./Components/ChatContainer";
import "./App.css";

const CURRENT_USER = "customer@mail.com";

export default function App() {
  const [chatData, setChatData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/chat-extended.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load chat data");
        return res.json();
      })
      .then((data) => {
        setChatData(data.results[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="app-state">Loading chat...</div>;
  if (error) return <div className="app-state error">Error: {error}</div>;

  return (
    <div className="app">
      <ChatContainer
        room={chatData.room}
        comments={chatData.comments}
        currentUser={CURRENT_USER}
      />
    </div>
  );
}