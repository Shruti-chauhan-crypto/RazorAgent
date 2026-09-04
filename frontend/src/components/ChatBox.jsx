import { useState } from "react";

import ChatBubble from "./ChatBubble";
import MessageInput from "./MessageInput";
import QuickPrompt from "./QuickPrompt";
import TypingIndicator from "./TypingIndicator";

import { initialMessages } from "../data/chatData";

import ProductList from "./ProductList";
import BundleCard from "./BundleCard";

import { chatWithAI } from "../api/api";

const ChatBox = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [typing, setTyping] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const handleSend = async (messageText = input) => {
    if (!messageText.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: messageText }]);

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
    <div className="m-3 flex h-[84vh] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">

      {/* Chat Header */}
      <div className="border-b border-slate-200 bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-white dark:border-slate-800">
        <h2 className="text-lg font-bold">🤖 RazorAgent Assistant</h2>
        <p className="text-sm text-blue-100">
          Ask for products, bundles, or payment help.
        </p>
      </div>

      {/* Quick Prompts */}
      <div className="border-b border-slate-100 px-5 py-3 dark:border-slate-800">
        <QuickPrompt onSelect={handleSend} />
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-5 overflow-y-auto bg-slate-50 px-5 py-6 dark:bg-slate-950">
        {messages.map((message, index) => (
          <div key={index} className="space-y-4">
            <ChatBubble sender={message.sender} text={message.text} />

            {message.products && (
              <ProductList products={message.products} />
            )}

            {message.bundle && (
              <BundleCard bundle={message.bundle} />
            )}
          </div>
        ))}

        {/* Loading Bubble */}
        {loading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-sm dark:border-blue-900/30 dark:bg-slate-900">
              <div className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
              <div className="h-2 w-2 animate-pulse rounded-full bg-blue-600 delay-150" />
              <div className="h-2 w-2 animate-pulse rounded-full bg-blue-600 delay-300" />
              <span className="ml-1 text-sm text-slate-600 dark:text-slate-300">
                RazorAgent is thinking...
              </span>
            </div>
          </div>
        )}

        {typing && <TypingIndicator />}
      </div>

      {/* Input */}
      <div className="border-t border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
        <MessageInput
          input={input}
          setInput={setInput}
          onSend={handleSend}
        />
      </div>
    </div>
  );
};

export default ChatBox;