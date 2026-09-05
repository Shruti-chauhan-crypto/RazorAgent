import { useEffect, useState } from "react";

import KPISection from "../components/KPISection";
import RevenueChart from "../components/RevenueChart";
import CategoryChart from "../components/CategoryChart";
import TopProducts from "../components/TopProducts";
import AIInsights from "../components/AIInsights";
import BackendStatus from "../components/BackendStatus";
import SkeletonCard from "../components/SkeletonCard";

import { getDashboardAnalytics } from "../api/api";

const Dashboard = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const data = await getDashboardAnalytics();
        setAnalytics(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);   // ✅ Important
      }
    };

    loadDashboard();
  }, []);


  if (loading) {
    return (
      <section className="section-padding bg-[var(--bg)]">
        <div className="container-custom space-y-8">
          {/* KPI Skeletons */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>

          {/* Chart Skeletons */}
          <div className="grid gap-8 lg:grid-cols-2">
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      </section>
    );
  }

  if (!analytics) {
    return (
      <div className="section-padding text-center">
        <h2 className="text-2xl font-bold text-red-500">
          Failed to load dashboard.
        </h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          Please check if the backend is running.
        </p>
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