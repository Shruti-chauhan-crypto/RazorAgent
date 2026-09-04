import OrderStatusBadge from "./OrderStatusBadge";

const OrderCard = ({ order }) => {
  return (
    <div className="card rounded-3xl p-6 space-y-5">

      <div className="flex items-center justify-between">

        <div>
          <h3 className="font-bold text-lg">
            {order.order_id}
          </h3>

          <p className="text-sm text-[var(--text-secondary)]">
            {order.created_at}
          </p>
        </div>

        <OrderStatusBadge status={order.status} />

      </div>

      {order.items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4"
        >
          <img
            src={item.image}
            alt={item.name}
            className="h-20 w-20 rounded-xl object-cover"
          />

          <div className="flex-1">
            <h4 className="font-medium">{item.name}</h4>

            <p className="text-sm text-[var(--text-secondary)]">
              Qty: {item.quantity}
            </p>
          </div>

          <p className="font-semibold text-blue-600">
            ₹{item.price}
          </p>
        </div>
      ))}

      <div className="flex justify-between border-t pt-4">
        <span>Total Paid</span>

        <span className="font-bold text-green-600">
          ₹{order.amount}
        </span>
      </div>

    </div>
  );
};

export default OrderCard;