import StatsCard from '../components/StatsCard';
import RevenueChart from '../components/RevenueChart';
import OrdersTable from '../components/OrdersTable';
import AIInsights from '../components/AIInsights';
import TopProducts from '../components/TopProducts';
import useAuth from "../hooks/useAuth";

import { stats } from '../data/dashboardData';

const Dashboard = () => {

  const { user } = useAuth();

  return (
    <section className="section-padding bg-(--bg)">
      <div className="container-custom space-y-10">

        {/* Header */}
        <div>
          <p className="font-medium text-blue-600">
            Merchant Dashboard
          </p>

          <h1 className="mt-2 text-4xl font-bold lg:text-5xl">
            Welcome back, {user?.name?.split(" ")[0]} 👋
          </h1>

          <p className="mt-3 text-(--text-secondary)">
            Store:{" "}
            <span className="font-medium text-blue-600">
              {user?.storeName}
            </span>
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard key={stat.id} stat={stat} />
          ))}
        </div>

        {/* Revenue Chart + AI Insights */}
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <RevenueChart />
          <AIInsights />
        </div>

        {/* Orders */}
        <OrdersTable />

        {/* Top Products */}
        <TopProducts />
      </div>
    </section>
  );
};

export default Dashboard;