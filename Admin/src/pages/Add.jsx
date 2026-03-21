import { useState, useRef, useEffect } from "react";
import axios from "axios";
const categories = [
  "Salad",
  "Rolls",
  "Deserts",
  "Sandwich",
  "Cake",
  "Pure Veg",
  "Pasta",
  "Noodles",
];

const Add = () => {
  const [image, setImage] = useState(null); // preview URL
  const [imageFile, setImageFile] = useState(null); // actual File object
  const [dragOver, setDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
  });
  const fileRef = useRef();

  const handleImage = (file) => {
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file)); // preview
      setImageFile(file); // save actual file for FormData
      console.log(file);
    }
  };
  useEffect(() => {
    return () => {
      if (image) URL.revokeObjectURL(image);
    };
  }, [image]);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleImage(e.dataTransfer.files[0]);
    console.log("chdh di");
  };

  const handleSubmit = async () => {
    if (!form.name || !form.price) {
      alert("Please fill Product Name and Price!");
      return;
    }
    if (!imageFile) {
      alert("Please upload a product image!");
      return;
    }

    // Build FormData — image + all form fields
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("category", form.category);
    formData.append("price", form.price);

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/food/add", // 👈 apna backend URL yahan lagao
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );

      if (response.data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setForm({ name: "", description: "", category: "Salad", price: "" });
          setImage(null);
          setImageFile(null);
        }, 2000);
      } else {
        alert(response.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error adding food item:", error);
      alert("Failed to add item. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm({ name: "", description: "", category: "Salad", price: "" });
    setImage(null);
    setImageFile(null);
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-orange-50 via-white to-amber-50 flex items-start justify-center px-3 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-12">
      <div className="w-full max-w-5xl">
        {/* ===== PAGE TITLE BAR ===== */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-800 tracking-tight">
              Add Food Item
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
              Menu Management → Add New Product
            </p>
          </div>
          <span className="hidden sm:flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-full">
            🍽️ New Item
          </span>
        </div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 lg:gap-7">
          {/* ========== LEFT PANEL ========== */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 lg:p-6">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                Product Image <span className="text-orange-500">*</span>
              </p>

              <div
                onClick={() => fileRef.current.click()}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                  console.log("hwa m hi h");
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                className={`relative rounded-xl border-2 border-dashed cursor-pointer overflow-hidden transition-all duration-200
                  h-44 sm:h-52 md:h-48 lg:h-56
                  flex items-center justify-center
                  ${
                    dragOver
                      ? "border-orange-500 bg-orange-50 scale-[1.01]"
                      : image
                        ? "border-orange-300"
                        : "border-gray-200 bg-gray-50 hover:border-orange-400 hover:bg-orange-50"
                  }`}
              >
                {image ? (
                  <>
                    <img
                      src={image}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-sm font-semibold bg-black/30 px-3 py-1 rounded-full">
                        🔄 Change
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="w-6 h-6 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-gray-600">
                      Drop image here
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      or click to browse
                    </p>
                    <p className="text-[10px] text-gray-300 mt-2">
                      PNG · JPG · WEBP · max 5MB
                    </p>
                  </div>
                )}
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImage(e.target.files[0])}
                />
              </div>

              {image && (
                <button
                  onClick={() => {
                    setImage(null);
                    setImageFile(null);
                  }}
                  className="w-full mt-3 py-1.5 text-xs text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition font-medium"
                >
                  ✕ Remove Image
                </button>
              )}
            </div>
          </div>

          {/* ========== RIGHT PANEL ========== */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-100">
                <div className="w-9 h-9 lg:w-10 lg:h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white text-lg shrink-0">
                  🍔
                </div>
                <div>
                  <h2 className="text-base lg:text-lg font-bold text-gray-800">
                    Item Details
                  </h2>
                  <p className="text-xs text-gray-400">
                    Fields marked{" "}
                    <span className="text-orange-500 font-semibold">*</span> are
                    required
                  </p>
                </div>
              </div>

              {/* Product Name */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Product Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Grilled Chicken Sandwich"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 lg:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700
                    outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition
                    placeholder-gray-300 font-medium"
                />
              </div>

              {/* Description */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Describe ingredients, taste, and what makes it special..."
                  name="description"
                  value={form.description}
                  onChange={(e) =>
                    form.description.length < 300 &&
                    setForm({ ...form, description: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700
                    outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition
                    resize-none placeholder-gray-300 leading-relaxed"
                />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-gray-300">
                    Optional but recommended
                  </span>
                  <span
                    className={`text-[10px] font-medium ${form.description.length > 250 ? "text-orange-500" : "text-gray-300"}`}
                  >
                    {form.description.length}/300
                  </span>
                </div>
              </div>

              {/* Category + Price */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 lg:mb-7">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      value={form.category}
                      name="category"
                      onChange={(e) =>
                        setForm({ ...form, category: e.target.value })
                      }
                      className="w-full px-4 py-3 lg:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700
                        outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition
                        appearance-none cursor-pointer font-medium"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-orange-400 pointer-events-none text-sm">
                      ▾
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                    Price (USD) <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500 font-bold text-sm">
                      $
                    </span>
                    <input
                      type="number"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      value={form.price}
                      name="price"
                      onChange={(e) =>
                        setForm({ ...form, price: e.target.value })
                      }
                      className="w-full pl-8 pr-4 py-3 lg:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700
                        outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition
                        placeholder-gray-300 font-medium"
                    />
                  </div>
                </div>
              </div>

              <hr className="border-gray-100 mb-5" />

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleReset}
                  className="sm:w-auto px-6 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-gray-500
                    hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 transition active:scale-95"
                >
                  ✕ Clear Form
                </button>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className={`flex-1 py-3 lg:py-3.5 rounded-xl text-sm font-bold text-white transition-all active:scale-95
                    flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed
                    ${
                      submitted
                        ? "bg-green-500 shadow-green-200"
                        : "bg-orange-500 hover:bg-orange-600 shadow-orange-200 hover:shadow-orange-300"
                    }`}
                >
                  {loading ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Uploading...
                    </>
                  ) : submitted ? (
                    <>✅ Item Added!</>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      Add to Menu
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
