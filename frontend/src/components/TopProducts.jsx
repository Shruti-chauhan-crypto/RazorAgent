import { FiTrendingUp } from "react-icons/fi";

const TopProducts = ({ products }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Merchant Analytics
          </p>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Best Selling Products
          </h3>
        </div>

        <div className="rounded-xl bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-950/20 dark:text-blue-300">
          Top {products.length}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left text-slate-500 dark:border-slate-700 dark:text-slate-400">
              <th className="pb-3 font-medium">Product</th>
              <th className="pb-3 font-medium">Sold</th>
              <th className="pb-3 text-right font-medium">Revenue</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.name}
                className="border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/40"
              >
                {/* Product Info */}
                <td className="py-4">
                  <div className="flex items-center gap-4">
                    {/* Rank Badge */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                      #{index + 1}
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {product.name}
                      </p>

                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {product.brand}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Sold */}
                <td>
                  <div className="font-semibold text-slate-700 dark:text-slate-300">
                    {product.sold}
                  </div>

                  <p className="text-xs text-slate-500">Units sold</p>
                </td>

                {/* Revenue */}
                <td className="text-right">
                  <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-green-600 dark:bg-green-950/20 dark:text-green-400">
                    <FiTrendingUp className="text-sm" />

                    <span className="font-bold">
                      ₹{product.revenue.toLocaleString()}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;