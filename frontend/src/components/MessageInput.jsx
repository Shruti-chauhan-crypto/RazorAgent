import { useState } from 'react';
import { FiSend } from 'react-icons/fi';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage('');
  };

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-sm">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        placeholder="Ask RazorAgent about products..."
        className="flex-1 bg-transparent px-2 py-2 outline-none placeholder:text-slate-400"
      />

      <button
        onClick={handleSubmit}
        className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-3 text-white transition hover:scale-105"
      >
        <FiSend size={18} />
      </button>
    </div>
  );
};

export default MessageInput;