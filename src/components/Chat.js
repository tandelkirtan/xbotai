import { Box } from "@mui/material";
import { useState } from "react";
import "./Chat.css";
import { Inputs } from "./Inputs.js";
import { Messages } from "./Messages.js";
import { Conversation } from "./Conversation.js";
import sampleData from "../data/sampleData.json";

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const question = input.trim();
    const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
    const nq = normalize(question);
    const found = sampleData.find((item) => {
      const iq = normalize(item.question);
      return nq === iq || nq.includes(iq) || iq.includes(nq);
    });
    const response = found
      ? found.response
      : "Sorry, Did not understand your query!";

    setMessages([...messages, { question, response, timestamp: new Date().toISOString(), feedback: null }]);
    setInput("");
  };

  const handleFeedback = (index, type) => {
    setMessages(prev => prev.map((msg, i) => 
      i === index ? { ...msg, feedback: msg.feedback === type ? null : type } : msg
    ));
  };

  const handleSave = () => {
    if (messages.length === 0) return;
    const saved = JSON.parse(localStorage.getItem("savedChats") || "[]");
    saved.push({ messages, timestamp: new Date().toISOString() });
    localStorage.setItem("savedChats", JSON.stringify(saved));
    alert("Chat saved!");
  };

  return (
    <Box width="100%" height="100%">
      {messages.length === 0 ? (
        <Messages onCardClick={(q) => setInput(q)} />
      ) : (
        <Conversation messages={messages} onFeedback={handleFeedback} />
      )}
      <Inputs
        input={input}
        setInput={setInput}
        onSubmit={handleSubmit}
        onSave={handleSave}
      />
    </Box>
  );
};
