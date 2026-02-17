import { assets } from "../src/assets/frontend_assets/assets";

const FoodItems = ({ id, name, price, image, description }) => {
  return (
    
    <div className="">
      <div>
        <img src={image} alt={name} className="rounded-2xl w-full" />
      </div>
      <div className="p-3">
        <div className="md:flex justify-between">
          <p className="font-medium text-lg">{name}</p>
          <img src={assets.rating_starts} className="h-5 w-fit"/>
        </div>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default FoodItems;
