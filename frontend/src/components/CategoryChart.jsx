import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiPieChart } from "react-icons/fi";

const COLORS = [
  "#2563EB", // Blue
  "#7C3AED", // Purple
  "#14B8A6", // Teal
  "#F59E0B", // Amber
  "#EF4444", // Red
];

const CategoryChart = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const item = payload[0];

      return (
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl dark:border-slate-700 dark:bg-slate-900">
          <p className="text-xs font-medium text-slate-500">
            {item.name}
          </p>

          <p className="mt-1 text-lg font-bold text-blue-600">
            ₹{item.value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-950/30">
          <FiPieChart className="text-xl text-blue-600" />
        </div>

        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Sales Distribution
          </p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Category Sales
          </h3>
        </div>
      </div>

      {/* Donut Chart */}
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            dataKey="sales"
            nameKey="category"
            innerRadius={65}
            outerRadius={95}
            paddingAngle={4}
            cornerRadius={8}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="mt-6 space-y-3">
        {data.map((item, index) => (
          <div
            key={item.category}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />

              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {item.category}
              </span>
            </div>

            <span className="text-sm font-semibold text-slate-900 dark:text-white">
              ₹{item.sales.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryChart;