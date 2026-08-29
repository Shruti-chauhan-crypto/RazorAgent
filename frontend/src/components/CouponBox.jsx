import { useState } from "react";

const CouponBox = ({ onApply }) => {
  const [coupon, setCoupon] = useState("");

  return (
    <div className="card p-5">
      <h3 className="mb-3 font-semibold">Apply Coupon</h3>

      <div className="flex gap-3">
        <input
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon code"
          className="flex-1 rounded-xl border border-(--border) px-4 py-3 outline-none"
        />

        <button
          onClick={() => onApply(coupon)}
          className="rounded-xl bg-blue-600 px-5 text-white hover:bg-blue-700"
        >
          Apply
        </button>
      </div>

      <p className="mt-3 text-sm text-slate-500">
        Try: **WELCOME10**
      </p>
    </div>
  );
};

export default CouponBox;