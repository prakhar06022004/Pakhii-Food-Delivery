
function Header() {
  return (
    <>
      <div className="max-w-6xl mx-auto h-110 bg-[url('/header_img.png')] mt-6 bg-cover bg-center rounded-2xl p-5 relative">
        <p className="text-white font-bold shadow-[0_0_10px_rgba(0,0,0,0.1)] w-fit p-2 text-6xl max-w-4xl ">
          Craving something amazing? <br />
          Order now. Eat happy.
        </p>
        <div className="mt-5">
          <p
            className="text-white text-lg w-170 font-semibold font-pacifico"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.1)" }}
          >
            Choose your favorite meal from our carefully crafted menu and enjoy
            delicious food delivered straight to your door.
          </p>
          <button className="border-none bg-white py-2 px-5 rounded-3xl w-fit mt-5 text-gray-800 cursor-pointer">
            View Menu
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
