import { useState } from 'react';

import ChatBubble from './ChatBubble';
import MessageInput from './MessageInput';
import QuickPrompt from './QuickPrompt';
import TypingIndicator from './TypingIndicator';

import { initialMessages } from '../data/chatData';

import ProductList from "./ProductList";
import { products } from "../data/products";
import { chatWithAI } from "../api/api";
import BundleCard from "./BundleCard";

const ChatBox = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [typing, setTyping] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const handleSend = async (messageText = input) => {
    if (!messageText.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: messageText },
    ]);

    setInput("");
    setLoading(true);

    try {
      const data = await chatWithAI(messageText);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.reply,
          products: data.products,
          bundle: data.bundle,
        },
      ]);
    } catch (error) {
      const message =
        error.response?.data?.detail || "Something went wrong.";

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: message.includes("429")
            ? "Gemini is temporarily busy. Showing recommendations from our catalog instead."
            : message,
        },
      ]);
    } finally {
      setLoading(false);
    }
    
  };

  return (
    <div className="card flex h-[80vh] flex-col p-6">
      <div className="mb-5">
        <h2 className="text-2xl font-bold">AI Shopping Assistant</h2>
        <p className="text-sm text-slate-500">
          Ask RazorAgent anything about products.
        </p>
      </div>

      <QuickPrompt onSelect={handleSend} />

      <div className="my-6 flex-1 space-y-5 overflow-y-auto pr-2">
        {messages.map((message, index) => (
          <div key={index} className="space-y-4">
            <ChatBubble sender={message.sender} text={message.text} />
            {message.products && <ProductList products={message.products}/>}
            {message.bundle &&  <BundleCard bundle={message.bundle} />}
          </div>
        ))}

        {loading && (
          <div className="flex justify-start mt-3">
            <div className="rounded-2xl bg-blue-100 dark:bg-blue-950/40 px-4 py-3 text-blue-600 dark:text-blue-300">
              🤖 RazorAgent is thinking...
            </div>
          </div>
        )}

        {typing && <TypingIndicator />}
      </div>

      <MessageInput
        input={input}
        setInput={setInput}
        onSend={handleSend}
      />
    </div>
  );
};

export default ChatBox;