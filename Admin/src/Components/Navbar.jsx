const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-orange-50 border-b border-orange-200 shadow-sm font-outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-17.5">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-orange-400 to-orange-600 shadow-md shadow-orange-200 shrink-0">
              <span className="text-white font-extrabold text-xl leading-none">
                P
              </span>
            </div>

            <div className="flex flex-col gap-0.5 leading-none">
              <span className="text-xl sm:text-2xl font-extrabold text-orange-500 tracking-tight leading-none whitespace-nowrap">
                Pakhii Delivery
              </span>
              <span className="self-start text-[10px] font-semibold uppercase tracking-widest text-orange-700 bg-orange-100 border border-orange-200 rounded-full px-2.5 py-0.5">
                Admin Panel
              </span>
            </div>
          </div>

          <img
            src="/bullet evening1.png"
            alt=""
            className="w-10 h-10 object-cover object-center rounded-full ring-2 ring-orange-300 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
