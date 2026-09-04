const RecentOrders = ({ orders }) => {
  return (
    <div className="card rounded-3xl p-6">

      <h3 className="mb-5 text-xl font-bold">
        Recent Orders
      </h3>

      <div className="space-y-4">
        {orders.slice(0, 4).map((order) => (
          <div
            key={order.order_id}
            className="flex items-center justify-between"
          >
            <div>
              <p className="font-medium">
                {order.order_id}
              </p>

              <p className="text-xs text-[var(--text-secondary)]">
                {order.created_at}
              </p>
            </div>

            <span className="font-semibold text-green-600">
              ₹{order.amount}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RecentOrders;