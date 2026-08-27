import { motion } from 'framer-motion';

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.01, duration: 0.2 }}
      whileHover={{ scale: 1.05 }}
      className=" rounded-3xl border p-6 backdrop-blur-sm bg-(--surface) border-(--border) shadow-lg hover:shadow-blue-100 hover:-translate-y-2 transition-all duration-300 dark:hover:shadow-blue-900/20"
    >
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bg}`}
      >
        <Icon className={`text-2xl ${feature.color}`} />
      </div>

      <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>

      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
        {feature.description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;