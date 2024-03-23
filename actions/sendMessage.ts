"use server";

import { ChatMessage } from "@/types/Chat";

export async function sendMessage(newMsg: ChatMessage) {
  const response = await fetch(
    "https://e631-202-28-158-34.ngrok-free.app/chatquery",
    {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newMsg),
    }
  );
  const data = await response.json();
  if (!data) throw Error(`backend responded ${response.status}`);
  if (!data.id) throw Error(`invalid message: ${data}`);
  return data;
}
