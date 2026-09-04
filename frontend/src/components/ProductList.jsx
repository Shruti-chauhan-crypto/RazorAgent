import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="mt-4 rounded-2xl border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-700 dark:bg-yellow-900/20">
        <p className="font-medium text-yellow-700 dark:text-yellow-300">
          🤖 No matching products found.
        </p>
        <p className="mt-1 text-sm text-yellow-600 dark:text-yellow-400">
          Try another category, brand, color, or increase your budget.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;