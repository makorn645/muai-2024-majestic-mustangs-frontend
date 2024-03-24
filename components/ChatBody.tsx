"use client";

import "@/assets/main.scss";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { sendMessage as send } from "@/actions/sendMessage";
import { ChatMessage } from "@/types/Chat";

interface IProps {
  messages: ChatMessage[];
  setMessages: Function;
}

const ChatBody = ({ messages, setMessages }: IProps) => {
  const [isWaitingResponse, setWaitingState] = useState<boolean>(false);

  const sendMessage = async (text: any) => {
    const newMsg: ChatMessage = {
      text: text,
      sender: "user",
      timestamp: new Date().toISOString(),
      id: uuidv4(),
    };

    setMessages([...messages, newMsg]); // Add the new message to the existing list

    setWaitingState(true);
    try {
      let currentSession = localStorage.getItem("session");
      if (!currentSession) {
        currentSession = uuidv4();
        localStorage.setItem("session", currentSession);
      }

      const data = await send({
        text: newMsg.text,
        sender: currentSession,
        timestamp: newMsg.timestamp,
        id: newMsg.id,
      });
      const responseMessage = {
        id: data.id,
        text: data.text,
        sender: data.sender,
        timestamp: data.timestamp,
      };

      setWaitingState(false);
      setMessages([...messages, newMsg, responseMessage]); // Add the new message to the existing list
    } catch (e) {
      setWaitingState(false);
    }
  };

  return (
    <div style={{ height: "436px", userSelect: "none" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList
            typingIndicator={
              isWaitingResponse ? <TypingIndicator content="กำลังพิมพ์" /> : ""
            }
          >
            <Message
              model={{
                direction: "incoming",
                message:
                  "สวัสดีเราเป็นที่ปรึกษาส่วนตัวให้กับคุณ เพียงกรอกคำถามข้อสงสัยทางการแพทย์กับเรา",
                sentTime: new Date().toISOString(),
                position: "normal",
              }}
            />
            {messages.map((message: any) => (
              <Message
                key={message.id}
                model={{
                  direction:
                    message.sender === "user" ? "outgoing" : "incoming",
                  message: message.text,
                  sentTime: message.timestamp,
                  position: "normal",
                }}
              />
            ))}
          </MessageList>
          <MessageInput
            placeholder="พิมพ์เพื่อส่งข้อความ"
            attachButton={false}
            onSend={sendMessage}
            disabled={isWaitingResponse}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatBody;
