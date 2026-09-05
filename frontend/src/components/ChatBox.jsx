import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";

import ChatBubble from "./ChatBubble";
import MessageInput from "./MessageInput";
import QuickPrompt from "./QuickPrompt";
import TypingIndicator from "./TypingIndicator";
import ProductList from "./ProductList";

import { initialMessages } from "../data/chatData";
import { chatWithAI } from "../api/api";

const ChatBox = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [typing, setTyping] = useState(false);

  const bottomRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Send Message
  const handleSend = async (message) => {
    if (!message.trim()) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        text: message,
      },
    ]);

    setTyping(true);

    // Loading toast
    const loadingToast = toast.loading("RazorAgent is thinking...");

    try {
      const data = await chatWithAI(message);

      toast.dismiss(loadingToast);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: data.reply,
          products: data.products || [],
        },
      ]);
    } catch (error) {
      toast.dismiss(loadingToast);

      toast.error("Backend unavailable. Try again later.");

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text:
            "⚠️ Sorry! I'm unable to connect to the AI backend right now. Please try again in a moment.",
        },
      ]);

      console.error(error);
    } finally {
      setTyping(false);
    }
  };

  return (
    <div className="card flex h-[87vh] flex-col rounded-3xl p-6">

      {/* Header */}
      <div className="mb-5 border-b border-[var(--border)] pb-4">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          🤖 AI Shopping Assistant
        </h2>

        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          Ask RazorAgent for product recommendations, bundles, and shopping advice.
        </p>
      </div>

      {/* Quick Prompts */}
      <QuickPrompt onSelect={handleSend} />

      {/* Chat Messages */}
      <div className="my-6 flex-1 space-y-5 overflow-y-auto pr-2">

        {messages.map((message) => (
          <div key={message.id} className="space-y-4">
            <ChatBubble sender={message.sender} text={message.text} />

            {message.products?.length > 0 && (
              <ProductList products={message.products} />
            )}
          </div>
        ))}

        {typing && <TypingIndicator />}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatBox;