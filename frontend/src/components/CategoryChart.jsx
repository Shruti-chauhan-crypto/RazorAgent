import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#2563EB",
  "#7C3AED",
  "#14B8A6",
  "#F59E0B",
  "#EF4444",
];

const CategoryChart = ({ data }) => {
  return (
    <div className="card rounded-3xl p-6">
      <h3 className="mb-5 text-xl font-bold">
        Category Sales
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="sales"
            nameKey="category"
            outerRadius={110}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;