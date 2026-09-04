const TopProducts = ({ products }) => {
  return (
    <div className="card rounded-3xl p-6">
      <h3 className="mb-5 text-xl font-bold">
        Best Selling Products
      </h3>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[var(--border)] text-left">
            <th className="pb-3">Product</th>
            <th className="pb-3">Sold</th>
            <th className="pb-3">Revenue</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.name} className="border-b border-[var(--border)]">
              <td className="py-4">
                <p className="font-medium">{product.name}</p>

                <span className="text-xs text-[var(--text-secondary)]">
                  {product.brand}
                </span>
              </td>

              <td>{product.sold}</td>

              <td className="font-semibold text-green-600">
                ₹{product.revenue.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProducts;