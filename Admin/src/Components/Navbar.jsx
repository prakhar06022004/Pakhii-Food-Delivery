const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center md:px-10 px-2 py-2 font-outfit -space-y-1.5">
        <div className="flex flex-col">
          <h2 className="text-2xl sm:text-3xl text-orange-500 font-bold  cursor-pointer whitespace-nowrap">
            Pakhii Delivery
          </h2>
          <h2 className="md:font-semibold text-lg text-gray-700">
            Admin panel
          </h2>
        </div>
        <img
          src="/bullet evening1.png"
          alt=""
          className="w-10 h-10 object-cover object-center rounded-full"
        />
      </div>
    </>
  );
};

export default Navbar;
