import axios from "axios";
import { useEffect, useState } from "react";

const CategoryBadge = ({ category }) => {
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

const FoodCard = ({ item }) => {
  const [imgErr, setImgErr] = useState(false);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div
        className="relative overflow-hidden bg-orange-50 w-full shrink-0"
        style={{ aspectRatio: "4/3" }}
      >
        {!imgErr && item.image ? (
          <img
            src={item.image}
            alt={item.name}
            onError={() => setImgErr(true)}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl">🍽️</span>
          </div>
        )}
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
          <button className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition-all duration-150 whitespace-nowrap">
            Add +
          </button>
        </div>
      </div>
    </div>
  );
};

const List = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

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
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm w-full">
        <div className="w-full px-3 sm:px-5 lg:px-8 pt-3 pb-2">

          {/* Title + Search — stack on mobile, row on sm+ */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xl shrink-0">🍴</span>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-tight truncate">
                  Our Menu
                </h1>
                <p className="text-[10px] text-gray-400 leading-none">
                  {loading ? "Loading..." : `${filtered.length} items available`}
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

          {/*
            Category tabs:
            - overflow-x-auto  → ONLY this strip scrolls horizontally
            - overflow-y-hidden → no vertical bleed
            - w-full           → stays inside parent, never overflows page
            - scrollbar hidden via inline style (works cross-browser)
          */}
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
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))" }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
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
                <> for &quot;<strong className="text-gray-600">{search}</strong>&quot;</>
              )}
            </p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("All"); }}
              className="text-orange-500 text-xs underline underline-offset-2 mt-1"
            >
              Clear filters
            </button>
          </div>
        )}

        {/*
          Food grid — auto-fill so cards always stretch to fill available width.
          minmax(150px, 1fr):
            mobile  → 2 cols  (screen ~360px → 2×150)
            tablet  → 3-4 cols
            desktop → 5-6 cols
        */}
        {!loading && !error && filtered.length > 0 && (
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))" }}
          >
            {filtered.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
