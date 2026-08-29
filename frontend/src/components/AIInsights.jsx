import { FiZap } from 'react-icons/fi';
import { aiInsights } from '../data/dashboardData';

const AIInsights = () => {
  return (
    <div className="card rounded-3xl p-6">
      <div className="mb-6 flex items-center gap-3">
        <FiZap className="text-yellow-500 text-2xl" />
        <h2 className="text-xl font-semibold">
          AI Insights
        </h2>
      </div>

      <div className="space-y-4">
        {aiInsights.map((insight) => (
          <div
            key={insight}
            className="rounded-2xl bg-blue-50 p-4 dark:bg-blue-950/30"
          >
            <p className="text-sm leading-6 text-blue-700 dark:text-blue-300">
              🤖 {insight}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIInsights;