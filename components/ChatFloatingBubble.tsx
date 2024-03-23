"use client";
import ChatIcon from "@/assets/svg/ChatIcon";
import { useState } from "react";
import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";
import { ChatMessage } from "@/types/Chat";

const ChatFloatingBubble = () => {
  const [isActive, setActive] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  if (isActive)
    return (
      <div
        style={{
          minWidth: "333px",
          minHeight: "500px",
          borderRadius: "20px",
          overflow: "auto",
        }}
        className="fixed right-0 bottom-0 m-6 drop-shadow-md w-fit h-fit sm:w-min sm:h-min"
      >
        <ChatHeader setActive={setActive} />
        <ChatBody messages={messages} setMessages={setMessages} />
      </div>
    );

  return (
    <div className="flex">
      <div
        onClick={() => setActive(!isActive)}
        style={{
          background: "#FFF",
          width: "64px",
          height: "64px",
          cursor: "pointer",
        }}
        className="fixed right-0 bottom-0 m-6 rounded-full justify-center items-center grid drop-shadow-md"
      >
        <ChatIcon />
      </div>
    </div>
  );
};

export default ChatFloatingBubble;
