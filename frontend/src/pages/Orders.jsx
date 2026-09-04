import { useEffect, useState } from "react";

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
    <section className="section-padding bg-[var(--bg)] min-h-screen">
      <div className="container-custom space-y-6">

        <h1 className="text-4xl font-bold">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          orders.map((order) => (
            <OrderCard key={order.order_id} order={order} />
          ))
        )}
      </div>
    </section>
  );
};

export default Orders;