import useFavorite from "@/hooks/useFavorite";
import { GoHeart, GoHeartFill } from "react-icons/go";

export interface CheckboxProps {
  id: number;
  className?: string;
}

const FavoriteCheckbox = ({ id, className }: CheckboxProps) => {
  const { handleFavorite, isFavorite } = useFavorite(id);

  
  return (
    <div
      className={`cursor-pointer ${className} px-1 pt-1 pb-[3px] rounded bg-white `}
    >
      <input
        className={`hidden `}
        type="checkbox"
        checked={isFavorite ?? false}
        onChange={handleFavorite}
        id={String(id)}
      />
      <label htmlFor={String(id)} className="">
        {isFavorite ? (
          <GoHeartFill className="text-red-500 text-xl" />
        ) : (
          <GoHeart className="text-xl" />
        )}
      </label>
    </div>
  );
};

export default FavoriteCheckbox;
