function Header() {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto md:h-110 h-60 sm:h-80 bg-[url('/header_img.png')] mt-6 bg-cover bg-center rounded-2xl p-5 relative">
        <p className="text-white font-bold w-fit shadow-[0_0_10px_rgba(0,0,0,0.1)] p-1 md:p-2 md:text-6xl text-4xl max-w-4xl">
          <p className="">Craving something amazing?</p>
          <p className="hidden sm:block"> Order now. Eat happy.</p>
        </p>
        <div className="mt-5">
          <p
            className="text-white text-lg w-110 md:w-170 font-semibold font-pacifico hidden sm:block"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.1)" }}
          >
            Choose your favorite meal from our carefully crafted menu and enjoy
            delicious food delivered straight to your door.
          </p>
          <button className="border-none bg-white py-2 px-5 rounded-3xl w-fit mt-3 md:mt-20 sm:mt-10 ml-0 md:ml-5 sm:ml-0 text-gray-800 cursor-pointer">
            View Menu
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
