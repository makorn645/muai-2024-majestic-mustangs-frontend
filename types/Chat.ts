export interface ChatMessage {
  intent?: string;
  id: string;
  text: string;
  sender: string;
  timestamp: string;
}
