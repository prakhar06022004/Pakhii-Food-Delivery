const AboutUs = () => {
  return (
    <div className="bg-orange-50 min-h-screen py-12 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600">
          About Us
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Delivering your favorite meals, anytime, anywhere.
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12 border border-orange-100">
        {/* Who We Are */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600 mb-2 font-poppins">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are a passionate food delivery platform committed to bringing
            your favorite meals right to your doorstep. From local street food
            to top-rated restaurants, we connect you with the best food around
            you.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600 mb-2 font-poppins">
            What We Offer
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We provide fast and reliable delivery, a wide variety of cuisines,
            and a smooth ordering experience. Our focus is to ensure your food
            arrives fresh, hot, and on time — every single time.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-orange-600 mb-2 font-poppins">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make food ordering simple, fast, and enjoyable for
            everyone. We aim to deliver happiness with every order.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="text-center p-5 rounded-xl bg-orange-50 hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-orange-600 font-poppins">
              ⚡ Fast Delivery
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Quick and reliable service at your doorstep
            </p>
          </div>

          <div className="text-center p-5 rounded-xl bg-orange-50 hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-orange-600 font-poppins">
              🍔 Quality Food
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Fresh, hygienic, and delicious meals
            </p>
          </div>

          <div className="text-center p-5 rounded-xl bg-orange-50 hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-orange-600 font-poppins">
              😊 Happy Customers
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Your satisfaction is our top priority
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="text-center mt-12">
        <p className="text-orange-500 font-medium italic">
          Made with ❤️ for food lovers
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
