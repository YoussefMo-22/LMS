import course from '../../assets/course.png';
import profile from '../../assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';
import ButtonUI from './UI/Button';
import { useNavigate } from 'react-router-dom';

type CourseCardProps = {
  id: number;
  title: string;
  image?: string;
  instructor: string;
  price: number;
  originalPrice?: number;
  rating: number; // from 0 to 5
};

export default function CourseCard({
//   id,
  title,
  image = course,
  instructor,
  price,
  originalPrice,
  rating,
}: CourseCardProps) {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate(`/course/1`);
  };

  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col gap-4">
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4 flex flex-col gap-2 h-full">
        <h3 className="text-xl font-bold text-primary-400 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-3 mt-2">
          <img src={profile} alt="profile" className="w-10 h-10 rounded-full object-cover" />
          <p className="text-lg font-medium">{instructor}</p>
        </div>

        <hr />

        <div className="flex gap-2 justify-between items-center">
          <div className="flex items-center gap-1">
            {[...Array(filledStars)].map((_, i) => (
              <FontAwesomeIcon key={`full-${i}`} icon={faStar} className="text-yellow-400" />
            ))}
            {[...Array(emptyStars)].map((_, i) => (
              <FontAwesomeIcon key={`empty-${i}`} icon={faStar} className="text-gray-300" />
            ))}
          </div>
          <p className="text-base font-semibold text-dark-400">
            ${price.toFixed(2)}
            {originalPrice && (
              <span className="line-through text-gray-400 text-sm ml-1">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </p>
        </div>

        <ButtonUI onClick={handleContinue} className="w-full mt-auto text-white">
          <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
          Add To Cart
        </ButtonUI>
      </div>
    </div>
  );
}

