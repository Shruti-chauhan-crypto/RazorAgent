import { FiMoon, FiSun } from "react-icons/fi";
import useTheme from "../hooks/useTheme";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 transition"
    >
      {darkMode ? (
        <FiSun size={20} className="text-yellow-400" />
      ) : (
        <FiMoon size={20} className="text-white-700" />
      )}
    </button>
  );
};

export default ThemeToggle;