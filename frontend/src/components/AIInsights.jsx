import {
  FiTrendingUp,
  FiAlertTriangle,
  FiTarget,
  FiShoppingBag,
} from "react-icons/fi";

const icons = {
  success: FiTrendingUp,
  warning: FiAlertTriangle,
  growth: FiTarget,
  info: FiShoppingBag,
};

const colors = {
  success: "border-green-500 bg-green-50 dark:bg-green-900/20",
  warning: "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20",
  growth: "border-blue-500 bg-blue-50 dark:bg-blue-900/20",
  info: "border-purple-500 bg-purple-50 dark:bg-purple-900/20",
};

const AIInsights = ({ insights }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">
        AI Merchant Insights
      </h3>

      {insights.map((insight, index) => {
        const Icon = icons[insight.type];

        return (
          <div
            key={index}
            className={`rounded-2xl border-l-4 p-5 ${colors[insight.type]}`}
          >
            <div className="flex gap-3">
              <Icon className="mt-1 text-xl" />

              <div>
                <h4 className="font-semibold">
                  {insight.title}
                </h4>

                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {insight.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AIInsights;