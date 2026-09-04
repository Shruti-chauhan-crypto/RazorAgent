import { useEffect, useState } from "react";

import KPISection from "../components/KPISection";
import RevenueChart from "../components/RevenueChart";
import CategoryChart from "../components/CategoryChart";
import TopProducts from "../components/TopProducts";
import AIInsights from "../components/AIInsights";
import BackendStatus from "../components/BackendStatus";

import { getDashboardAnalytics } from "../api/api";

const Dashboard = () => {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const data = await getDashboardAnalytics();
        setAnalytics(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadDashboard();
  }, []);

  if (!analytics) {
    return (
      <div className="section-padding text-center">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <section className="m-3 section-padding bg-[var(--bg)]">
      <div className="container-custom space-y-8">

        <BackendStatus />

        <KPISection kpis={analytics.kpis} />

        <div className="grid gap-8 lg:grid-cols-2">
          <RevenueChart data={analytics.weeklyRevenue} />
          <CategoryChart data={analytics.categorySales} />
        </div>

        <TopProducts products={analytics.topProducts} />

        <AIInsights insights={analytics.aiInsights} />

      </div>
    </section>
  );
};

export default Dashboard;