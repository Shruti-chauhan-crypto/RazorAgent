import { topProducts } from '../data/dashboardData';

const TopProducts = () => {
  return (
    <div className="card rounded-3xl p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Top Selling Products
      </h2>

      <div className="space-y-5">
        {topProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between"
          >
            <div>
              <h3 className="font-medium">{product.name}</h3>

              <p className="text-sm text-(--text-secondary)">
                {product.sold} Orders Sold
              </p>
            </div>

            <span className="font-bold text-blue-600">
              {product.revenue}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;