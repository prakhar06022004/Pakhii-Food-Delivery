const FoodItems = ({ id, name, price, image, description }) => {
  return (
    <div className="">
      <div>
        <img src={image} alt={name} className="rounded-2xl"/>
      </div>
      <div>
        {" "}
        <p>{name}</p>
        <p>{price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FoodItems;
