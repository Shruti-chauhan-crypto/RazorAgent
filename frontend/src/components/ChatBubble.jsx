import { FiUser } from 'react-icons/fi';
import { RiRobot2Line } from 'react-icons/ri';

const ChatBubble = ({ sender, text }) => {
  const isBot = sender === 'bot';

  return (
    <div className={`flex items-start gap-3 ${isBot ? '' : 'justify-end'}`}>
      {isBot && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
          <RiRobot2Line className="text-xl text-blue-600" />
        </div>
      )}

      <div
        className={`max-w-[75%] rounded-3xl px-5 py-3 text-sm leading-7 shadow-sm ${
          isBot
            ? 'bg-(--surface) border border-(--border) text-(--text-primary)'
            : 'bg-linear-to-r from-blue-600 to-indigo-600 text-white'
        }`}
      >
        {text}
      </div>

      {!isBot && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700">
          <FiUser className="text-lg" />
        </div>
      )}
    </div>
  );
};

export default ChatBubble;