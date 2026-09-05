import { useEffect, useState } from "react";
import { FiPackage, FiShoppingBag } from "react-icons/fi";

import { getOrders } from "../api/api";
import OrderCard from "../components/OrderCard";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      const data = await getOrders();
      setOrders(data);
    };

    loadOrders();
  }, []);

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-10 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Page Header */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
                <FiPackage />
                Order History
              </div>

              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                My Orders
              </h1>

              <p className="mt-2 text-blue-100">
                Track your purchases and Razorpay payment history in one place.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur">
              <p className="text-sm text-blue-100">Total Orders</p>
              <h2 className="text-3xl font-bold">{orders.length}</h2>
            </div>
          </div>
        </div>

        {/* Orders List */}
        {orders.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white py-16 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950/30">
              <FiShoppingBag className="text-3xl text-blue-600" />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
              No orders yet
            </h3>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Start shopping with RazorAgent and your orders will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {orders.map((order) => (
              <OrderCard key={order.order_id} order={order} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Orders;