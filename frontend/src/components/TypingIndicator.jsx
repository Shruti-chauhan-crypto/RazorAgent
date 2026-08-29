import { motion } from 'framer-motion';
import { RiRobot2Line } from 'react-icons/ri';

const Dot = ({ delay }) => (
  <motion.span
    className="h-2 w-2 rounded-full bg-blue-500"
    animate={{ y: [0, -5, 0] }}
    transition={{ repeat: Infinity, duration: 0.6, delay }}
  />
);

const TypingIndicator = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
        <RiRobot2Line className="text-blue-600" />
      </div>

      <div className="flex gap-2 rounded-full bg-(--surface-secondary) px-4 py-3">
        <Dot delay={0} />
        <Dot delay={0.2} />
        <Dot delay={0.4} />
      </div>
    </div>
  );
};

export default TypingIndicator;