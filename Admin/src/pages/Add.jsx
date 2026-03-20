import { useState, useRef } from "react";

const categories = [
  "Salad", "Rolls", "Deserts", "Sandwich",
  "Cake", "Pure Veg", "Pasta", "Noodles",
];

const Add = () => {
  const [image, setImage] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
  });
  const fileRef = useRef();

  const handleImage = (file) => {
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleImage(e.dataTransfer.files[0]);
  };

  const handleSubmit = () => {
    if (!form.name || !form.price) {
      alert("Please fill Product Name and Price!");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", description: "", category: "Salad", price: "" });
      setImage(null);
    }, 2000);
  };

  const handleReset = () => {
    setForm({ name: "", description: "", category: "Salad", price: "" });
    setImage(null);
  };

  return (
    /*
      OUTER WRAPPER:
      - Mobile: full screen, padding small
      - md (768px+): sidebar layout simulation, moderate padding
      - lg (1024px+): more padding, wider content
    */
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-start justify-center px-3 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-12">

      {/*
        MAIN CONTENT AREA:
        - Mobile: full width
        - md: 2-column grid (left panel + right form)
        - lg: wider 2-column with more space
      */}
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
          {/* Breadcrumb pill — hidden on very small */}
          <span className="hidden sm:flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-full">
            🍽️ New Item
          </span>
        </div>

        {/*
          GRID LAYOUT:
          - Mobile (< md): single column, stacked
          - md (768px+): 2 columns — left (image + tips) | right (form fields)
          - lg (1024px+): same grid but wider
        */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 lg:gap-7">

          {/* ==================== LEFT PANEL ==================== */}
          {/*
            md: takes 2 of 5 columns
            lg: takes 2 of 5 columns
          */}
          <div className="md:col-span-2 flex flex-col gap-5">

            {/* Image Upload Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 lg:p-6">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                Product Image
              </p>

              {/* Upload Box */}
              <div
                onClick={() => fileRef.current.click()}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                className={`relative rounded-xl border-2 border-dashed cursor-pointer overflow-hidden transition-all duration-200
                  h-44 sm:h-52 md:h-48 lg:h-56
                  flex items-center justify-center
                  ${dragOver
                    ? "border-orange-500 bg-orange-50 scale-[1.01]"
                    : image
                      ? "border-orange-300"
                      : "border-gray-200 bg-gray-50 hover:border-orange-400 hover:bg-orange-50"
                  }`}
              >
                {image ? (
                  <>
                    <img src={image} alt="preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-sm font-semibold bg-black/30 px-3 py-1 rounded-full">
                        🔄 Change
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-gray-600">Drop image here</p>
                    <p className="text-xs text-gray-400 mt-1">or click to browse</p>
                    <p className="text-[10px] text-gray-300 mt-2">PNG · JPG · WEBP · max 5MB</p>
                  </div>
                )}
                <input ref={fileRef} type="file" accept="image/*" className="hidden"
                  onChange={(e) => handleImage(e.target.files[0])} />
              </div>

              {image && (
                <button onClick={() => setImage(null)}
                  className="w-full mt-3 py-1.5 text-xs text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition font-medium">
                  ✕ Remove Image
                </button>
              )}
            </div>



          </div>

          {/* ==================== RIGHT PANEL (Form) ==================== */}
          {/* md: takes 3 of 5 columns */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 lg:p-8">

              {/* Form Header */}
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-100">
                <div className="w-9 h-9 lg:w-10 lg:h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white text-lg flex-shrink-0">
                  🍔
                </div>
                <div>
                  <h2 className="text-base lg:text-lg font-bold text-gray-800">Item Details</h2>
                  <p className="text-xs text-gray-400">Fields marked <span className="text-orange-500 font-semibold">*</span> are required</p>
                </div>
              </div>

              {/* ---- Product Name ---- */}
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

              {/* ---- Description ---- */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Describe ingredients, taste, and what makes it special..."
                  value={form.description}
                  onChange={(e) => form.description.length < 300 && setForm({ ...form, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700
                    outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition
                    resize-none placeholder-gray-300 leading-relaxed"
                />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-gray-300">Optional but recommended</span>
                  <span className={`text-[10px] font-medium ${form.description.length > 250 ? "text-orange-500" : "text-gray-300"}`}>
                    {form.description.length}/300
                  </span>
                </div>
              </div>

              {/*
                ---- Category + Price ----
                Mobile: stacked
                sm+: side by side
              */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 lg:mb-7">

                {/* Category */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      name="category"
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="w-full px-4 py-3 lg:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700
                        outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition
                        appearance-none cursor-pointer font-medium"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-orange-400 pointer-events-none text-sm">▾</span>
                  </div>
                </div>

                {/* Price */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                    Price (USD) <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500 font-bold text-sm">$</span>
                    <input
                      type="number"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      value={form.price}
                      onChange={(e) => setForm({ ...form, price: e.target.value })}
                      className="w-full pl-8 pr-4 py-3 lg:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700
                        outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition
                        placeholder-gray-300 font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-gray-100 mb-5" />

              {/* ---- Action Buttons ---- */}
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Clear */}
                <button
                  onClick={handleReset}
                  className="sm:w-auto px-6 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-gray-500
                    hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 transition active:scale-95"
                >
                  ✕ Clear Form
                </button>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className={`flex-1 py-3 lg:py-3.5 rounded-xl text-sm font-bold text-white transition-all active:scale-95
                    flex items-center justify-center gap-2 shadow-lg
                    ${submitted
                      ? "bg-green-500 shadow-green-200"
                      : "bg-orange-500 hover:bg-orange-600 shadow-orange-200 hover:shadow-orange-300"
                    }`}
                >
                  {submitted ? (
                    <>✅ Item Added!</>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      </svg>
                      Add to Menu
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>
          {/* ==================== END RIGHT PANEL ==================== */}

        </div>
        {/* ==================== END GRID ==================== */}



      </div>
    </div>
  );
};

export default Add;
