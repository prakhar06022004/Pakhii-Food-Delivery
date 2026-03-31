function Header() {
  const scrollToMenu = () => {
    const section = document.getElementById("menu-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-6xl mx-auto md:h-110 h-60 sm:h-80 bg-[url('/header_img.png')] mt-4 bg-cover bg-center rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-2xl">
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        
        {/* Heading */}
        <div>
          <p className="text-white font-extrabold text-4xl md:text-6xl leading-tight drop-shadow-lg">
            Craving something amazing?
          </p>
          <p className="text-white font-extrabold text-4xl md:text-6xl leading-tight drop-shadow-lg hidden sm:block">
            Order now. Eat happy.
          </p>

          {/* Subtitle */}
          <p className="text-white/85 text-sm md:text-xl font-medium mt-3 max-w-xl hidden sm:block leading-relaxed drop-shadow-md">
            Choose your favorite meal from our carefully crafted menu and enjoy
            delicious food delivered straight to your door.
          </p>
        </div>

        {/* Button */}
        <div className="mb-2">
          <button
            onClick={scrollToMenu}
            className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold px-7 py-2.5 rounded-full shadow-lg shadow-orange-400/40 transition-all duration-200 hover:scale-105 text-sm md:text-base"
          >
            🍽️ View Menu
          </button>
        </div>

      </div>
    </div>
  );
}

export default Header;