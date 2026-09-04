import {
  FiDollarSign,
  FiShoppingBag,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";

const KPISection = ({ kpis }) => {
  const cards = [
    {
      title: "Revenue",
      value: `₹${kpis.totalRevenue.toLocaleString()}`,
      icon: FiDollarSign,
      color: "from-green-500 to-emerald-600",
      bg: "bg-green-50 dark:bg-green-950/20",
      text: "text-green-600",
    },
    {
      title: "Orders",
      value: kpis.orders,
      icon: FiShoppingBag,
      color: "from-blue-500 to-indigo-600",
      bg: "bg-blue-50 dark:bg-blue-950/20",
      text: "text-blue-600",
    },
    {
      title: "Customers",
      value: kpis.customers,
      icon: FiUsers,
      color: "from-purple-500 to-violet-600",
      bg: "bg-purple-50 dark:bg-purple-950/20",
      text: "text-purple-600",
    },
    {
      title: "Conversion",
      value: `${kpis.conversionRate}%`,
      icon: FiTrendingUp,
      color: "from-orange-500 to-amber-600",
      bg: "bg-orange-50 dark:bg-orange-950/20",
      text: "text-orange-600",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
          >
            {/* Top Row */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {card.title}
                </p>

                <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {card.value}
                </h3>
              </div>

              <div
                className={`rounded-2xl p-3 ${card.bg} shadow-sm`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} text-white`}
                >
                  <Icon className="text-xl" />
                </div>
              </div>
            </div>

            {/* Bottom Trend */}
            <div className="mt-5 flex items-center gap-2">
              <span className={`text-sm font-semibold ${card.text}`}>
                +12.5%
              </span>

              <span className="text-sm text-slate-500 dark:text-slate-400">
                vs last month
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KPISection;