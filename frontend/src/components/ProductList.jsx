import { FiShoppingBag, FiSearch } from "react-icons/fi";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="mt-5 rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 p-5 dark:border-amber-800 dark:from-amber-950/20 dark:to-yellow-950/20">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-amber-100 p-3 dark:bg-amber-900/30">
            <FiSearch className="text-xl text-amber-600 dark:text-amber-400" />
          </div>

          <div>
            <h3 className="font-semibold text-amber-700 dark:text-amber-300">
              No matching products found
            </h3>

            <p className="mt-1 text-sm text-amber-600 dark:text-amber-400">
              Try another category, brand, color, or increase your budget to see
              more recommendations.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      {/* AI Recommendation Header */}
      <div className="flex items-center justify-between rounded-2xl border border-blue-200 bg-blue-50 px-5 py-3 dark:border-blue-900/40 dark:bg-blue-950/20">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-2 dark:bg-blue-900/40">
            <FiShoppingBag className="text-blue-600 dark:text-blue-400" />
          </div>

          <div>
            <h3 className="font-semibold text-blue-700 dark:text-blue-300">
              AI Recommended Products
            </h3>
            <p className="text-xs text-blue-600 dark:text-blue-400">
              {products.length} products matched your request
            </p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;