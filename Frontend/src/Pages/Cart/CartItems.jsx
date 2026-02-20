const CartItems = ({ item, qty }) => {
  return (
    <div className="mt-5 flex gap-12 bg-gray-50 py-4 px-2">
      <img
        src={item?.image}
        alt={item?.name}
        className="w-20 h-20 md:w-30 md:h-30 object-cover rounded-2xl"
      />
      <div className="flex flex-col gap-2 text-lg">
        <p className="font-semibold">{item?.name}</p>
        <p className="font-semibold text-orange-500">${item?.price}</p>
      </div>
      <div className="w-65 font-outfit text-lg hidden md:block text-gray-600">{item?.description}</div>
      <div></div>
    </div>
  );
};

export default CartItems;
