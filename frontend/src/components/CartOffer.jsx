import { FiTruck, FiTag } from "react-icons/fi";

const CartOffer = ({ offer }) => {
  if (!offer) return null;

  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-700 dark:bg-blue-950/30">

      <div className="flex items-center gap-3">

        {offer.type === "shipping" ? (
          <FiTruck className="text-2xl text-blue-600" />
        ) : (
          <FiTag className="text-2xl text-green-600" />
        )}

        <div>
          <h3 className="font-semibold">{offer.title}</h3>

          <p className="text-sm text-slate-600 dark:text-slate-300">
            {offer.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartOffer;