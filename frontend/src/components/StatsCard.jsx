import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const StatsCard = ({ stat }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card rounded-3xl p-6"
    >
      <p className="text-sm text-(--text-secondary)">{stat.title}</p>

      <h2 className="mt-2 text-3xl font-bold">{stat.value}</h2>

      <div className={`mt-4 flex items-center gap-2 ${stat.color}`}>
        <FiArrowUpRight />
        <span className="font-medium">{stat.growth}</span>
        <span className="text-sm text-(--text-secondary)">
          vs last month
        </span>
      </div>
    </motion.div>
  );
};

export default StatsCard;