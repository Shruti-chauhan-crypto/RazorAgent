import { FiStar } from 'react-icons/fi';

const RatingStars = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FiStar
          key={star}
          className={
            star <= Math.round(rating)
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-slate-300'
          }
        />
      ))}

      <span className="ml-2 text-sm text-slate-500">{rating}</span>
    </div>
  );
};

export default RatingStars;