const SkeletonCard = () => {
  return (
    <div className="animate-pulse rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="mb-4 h-6 w-1/3 rounded bg-slate-300 dark:bg-slate-700"></div>

      <div className="h-10 w-2/3 rounded bg-slate-300 dark:bg-slate-700"></div>

      <div className="mt-6 h-4 w-full rounded bg-slate-300 dark:bg-slate-700"></div>

      <div className="mt-3 h-4 w-4/5 rounded bg-slate-300 dark:bg-slate-700"></div>
    </div>
  );
};

export default SkeletonCard;