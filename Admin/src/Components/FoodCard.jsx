import { MdDelete } from "react-icons/md";
import { CategoryBadge } from "../pages/List";

const FoodCard = ({ item, handleRemove }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div
        className="relative overflow-hidden bg-orange-50 w-full shrink-0"
        style={{ aspectRatio: "4/3" }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2">
          <CategoryBadge category={item.category} />
        </div>
      </div>

      <div className="p-3 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-sm leading-snug truncate mb-1">
          {item.name}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 flex-1 mb-3">
          {item.description || "No description available."}
        </p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-orange-500 font-extrabold text-base whitespace-nowrap">
            ₹{item.price}
          </span>
          <MdDelete
            className="text-gray-500 cursor-pointer hover:bg-gray-200 rounded-2xl duration-200"
            size={23}
            onClick={() => handleRemove(item._id)}
          />
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
