import { useState } from 'react';

import ChatBubble from './ChatBubble';
import MessageInput from './MessageInput';
import QuickPrompt from './QuickPrompt';
import TypingIndicator from './TypingIndicator';

import { initialMessages } from '../data/chatData';

import ProductList from "./ProductList";
import { products } from "../data/products";

const ChatBox = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [typing, setTyping] = useState(false);

  const handleSend = (message) => {
    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: `I found these recommendations for "${message}".`,
          products,
        },
      ]);

      setTyping(false);
    }, 1500);
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
        {messages.map((message) => (
        <div key={message.id} className="space-y-4">
            <ChatBubble sender={message.sender} text={message.text} />

            {message.products && <ProductList products={message.products} />}
        </div>
        ))}

        {typing && <TypingIndicator />}
      </div>

      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatBox;