const prompts = [
  '👟 Sneakers under ₹3000',
  '🎒 College Backpack',
  '👗 Blue Kurti under ₹1200',
  '🎧 Wireless Earbuds',
];

const QuickPrompt = ({ onSelect }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          onClick={() => onSelect(prompt)}
          className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-600 hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
};

export default QuickPrompt;