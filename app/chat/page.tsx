"use client";
import ChatFloatingBubble from "@/components/ChatFloatingBubble";

export default function Chat() {
  return (
    <>
      <iframe
        style={{
          width: "100vw",
          height: "100vh",
        }}
        src="https://www.siphhospital.com/en/home"
      ></iframe>
      <ChatFloatingBubble></ChatFloatingBubble>
    </>
  );
}
