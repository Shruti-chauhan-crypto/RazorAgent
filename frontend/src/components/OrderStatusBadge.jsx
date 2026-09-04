const statusColors = {
  Paid: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Failed: "bg-red-100 text-red-700",
  Delivered: "bg-blue-100 text-blue-700",
};

const OrderStatusBadge = ({ status }) => {
  return (
    <span
      className={`rounded-full px-4 py-2 text-sm font-medium ${statusColors[status]}`}
    >
      {status}
    </span>
  );
};

export default OrderStatusBadge;