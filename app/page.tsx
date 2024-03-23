"use client";

import ChatFloatingBubble from "@/components/ChatFloatingBubble";

export default function Home() {
  return (
    <>
      <div
        style={{
          height: "500px",
          background: "#FFF",
        }}
      ></div>
      <div
        style={{
          height: "500px",
          background: "#333",
        }}
      ></div>
      <ChatFloatingBubble />
    </>
  );
}
