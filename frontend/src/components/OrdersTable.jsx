import { orders } from '../data/dashboardData';

const OrdersTable = () => {
  return (
    <div className="card rounded-3xl p-6 overflow-x-auto">
      <h2 className="mb-6 text-xl font-semibold">
        Recent Orders
      </h2>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-(--border) text-sm text-(--text-secondary)">
            <th className="pb-3">Order ID</th>
            <th className="pb-3">Customer</th>
            <th className="pb-3">Product</th>
            <th className="pb-3">Amount</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-(--border)]">
              <td className="py-4 font-medium">{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>₹{order.amount}</td>
              <td>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    order.status === 'Paid'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable