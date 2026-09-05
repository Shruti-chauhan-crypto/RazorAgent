import {
  FiTrendingUp,
  FiAlertTriangle,
  FiTarget,
  FiShoppingBag,
  FiZap,
} from "react-icons/fi";

const icons = {
  success: FiTrendingUp,
  warning: FiAlertTriangle,
  growth: FiTarget,
  info: FiShoppingBag,
};

const styles = {
  success: {
    card: "border-green-200 bg-green-50/80 dark:border-green-800 dark:bg-green-950/20",
    icon: "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400",
    badge: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    label: "Growth",
  },
  warning: {
    card: "border-yellow-200 bg-yellow-50/80 dark:border-yellow-800 dark:bg-yellow-950/20",
    icon: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400",
    badge: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    label: "Attention",
  },
  growth: {
    card: "border-blue-200 bg-blue-50/80 dark:border-blue-800 dark:bg-blue-950/20",
    icon: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    label: "Opportunity",
  },
  info: {
    card: "border-purple-200 bg-purple-50/80 dark:border-purple-800 dark:bg-purple-950/20",
    icon: "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400",
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    label: "Recommendation",
  },
};

const AIInsights = ({ insights }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-950/30">
          <FiZap className="text-xl text-blue-600" />
        </div> 

        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            AI Business Recommendations
          </p>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Merchant Insights
          </h3>
        </div>
      </div>

      {/* Insight Cards */}
      <div className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = icons[insight.type];
          const style = styles[insight.type];

          return (
            <div
              key={index}
              className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${style.card}`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.icon}`}
                >
                  <Icon className="text-xl" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {insight.title}
                    </h4>

                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${style.badge}`}
                    >
                      {style.label}
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {insight.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AIInsights;