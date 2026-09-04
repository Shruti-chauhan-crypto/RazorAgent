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
      color: "text-green-600",
    },
    {
      title: "Orders",
      value: kpis.orders,
      icon: FiShoppingBag,
      color: "text-blue-600",
    },
    {
      title: "Customers",
      value: kpis.customers,
      icon: FiUsers,
      color: "text-purple-600",
    },
    {
      title: "Conversion",
      value: `${kpis.conversionRate}%`,
      icon: FiTrendingUp,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div key={card.title} className="card rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[var(--text-secondary)]">
                  {card.title}
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  {card.value}
                </h3>
              </div>

              <div className={`rounded-2xl bg-slate-100 p-4 dark:bg-slate-800 ${card.color}`}>
                <Icon className="text-2xl" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KPISection;