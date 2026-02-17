import { menu_list } from "../../assets/frontend_assets/assets";
function Menu({ category, setCategory }) {
  return (
    <div className="flex flex-col gap-5 max-w-6xl m-auto">
      <div className="flex flex-col">
        <p className="font-semibold text-3xl mt-5 text-gray-800">
          Explore our menu
        </p>
        <p className="font-semibold text-gray-700">
          Explore our delicious menu filled with fresh and flavorful dishes.
          Choose your favorite meal and treat yourself to something truly
          satisfying today.
        </p>
      </div>
      <div className="flex text-center overflow-x-scroll gap-8">
        {menu_list.map((menuItem) => (
          <div
            className="cursor-pointer"
            key={menuItem?.menu_name}
            onClick={() =>
              setCategory((prev) =>
                prev === menuItem.menu_name ? "All" : menuItem.menu_name,
              )
            }
          >
            <img
              src={menuItem?.menu_image}
              alt={menuItem.menu_name}
              className={`${category === menuItem.menu_name ? "border-amber-500 border-4 rounded-full " : ""}`}
            />
            <p>{menuItem.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
