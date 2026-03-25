import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import FoodCard from "../Components/FoodCard";

export const CategoryBadge = ({ category }) => {
  const colors = {
    default: "bg-amber-100 text-amber-800",
    veg: "bg-green-100 text-green-700",
    "non-veg": "bg-red-100 text-red-700",
    dessert: "bg-pink-100 text-pink-700",
    beverage: "bg-blue-100 text-blue-700",
    snack: "bg-orange-100 text-orange-700",
    pizza: "bg-yellow-100 text-yellow-800",
    cake: "bg-pink-100 text-pink-700",
    "pure veg": "bg-green-100 text-green-700",
  };
  const key = category?.toLowerCase();
  const cls = colors[key] || colors.default;
  return (
    <span
      className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${cls}`}
    >
      {category}
    </span>
  );
};

const SkeletonCard = () => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse flex flex-col">
    <div className="bg-gray-200 w-full" style={{ aspectRatio: "4/3" }} />
    <div className="p-3 space-y-2">
      <div className="h-3.5 bg-gray-200 rounded w-3/4" />
      <div className="h-2.5 bg-gray-100 rounded w-full" />
      <div className="h-2.5 bg-gray-100 rounded w-4/5" />
      <div className="flex justify-between items-center pt-1">
        <div className="h-4 bg-gray-200 rounded w-12" />
        <div className="h-7 bg-gray-200 rounded-xl w-16" />
      </div>
    </div>
  </div>
);

const List = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const handleRemove = async (id) => {
    try {
      const removeItem = await axios.delete(
        `http://localhost:5000/api/food/remove/${id}`,
      );
      if (removeItem.data.success) {
        toast.success(removeItem.data.message);
      } else {
        toast.error("Removing Error");
      }
      setList((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const getItems = async () => {
      try {
        const items = await axios.get("http://localhost:5000/api/food/list");
        setList(items.data.data);
      } catch (err) {
        setError("Failed to load food items.");
      } finally {
        setLoading(false);
      }
    };
    getItems();
  }, []);

  const categories = [
    "All",
    ...new Set(list.map((i) => i.category).filter(Boolean)),
  ];

  const filtered = list.filter((item) => {
    const matchSearch =
      item.name?.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase());
    const matchCat =
      activeCategory === "All" || item.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    /*
      KEY FIX: overflow-x-hidden on root so nothing bleeds outside.
      w-full ensures it never grows wider than parent.
    */
    <div className="min-h-screen bg-orange-50/40 w-full overflow-x-hidden">
      {/* ── Sticky Header ── */}
      <ToastContainer />
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm w-full">
        <div className="w-full px-3 sm:px-5 lg:px-8 pt-3 pb-2">
          {/* Title + Search — stack on mobile, row on sm+ */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xl shrink-0">🍴</span>
              <div className="min-w-0">
                <h1 className="md:text-2xl text-xl font-extrabold text-gray-900 leading-tight truncate">
                  Our Menu
                </h1>
                <p className="sm:text-sm text-xs text-gray-400 leading-none">
                  {loading
                    ? "Loading..."
                    : `${filtered.length} items available`}
                </p>
              </div>
            </div>

            {/* Search — full width on mobile */}
            <div className="relative w-full sm:w-52 shrink-0">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none">
                🔍
              </span>
              <input
                type="text"
                placeholder="Search dishes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-7 pr-3 py-1.5 rounded-xl border border-gray-200 bg-gray-50 text-xs focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
              />
            </div>
          </div>

          {!loading && categories.length > 1 && (
            <div
              className="w-full overflow-x-auto overflow-y-hidden pb-1"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* flex with no-wrap so pills stay in one line */}
              <div className="flex gap-1.5 flex-nowrap w-max">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap shrink-0 px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                      activeCategory === cat
                        ? "bg-orange-500 text-white shadow"
                        : "bg-gray-100 text-gray-500 hover:bg-orange-50 hover:text-orange-500"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="w-full px-3 sm:px-5 lg:px-8 py-4">
        {/* Error */}
        {error && (
          <div className="flex flex-col items-center py-10 gap-2">
            <span className="text-4xl">😕</span>
            <p className="text-gray-400 text-sm">{error}</p>
          </div>
        )}

        {/* Skeleton grid */}
        {loading && (
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && filtered.length === 0 && (
          <div className="flex flex-col items-center py-10 gap-2">
            <span className="text-4xl">🍽️</span>
            <p className="text-gray-400 text-xs text-center">
              No dishes found
              {search && (
                <>
                  for &quot;<strong className="text-gray-600">{search}</strong>
                  &quot;
                </>
              )}
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="text-orange-500 text-xs underline underline-offset-2 mt-1 cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            }}
          >
            {filtered.map((item) => (
              <>
                <FoodCard
                  key={item._id}
                  item={item}
                  handleRemove={handleRemove}
                />
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
