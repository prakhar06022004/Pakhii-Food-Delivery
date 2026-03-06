import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { StoreContext } from "../../Context/StoreContext";

function PlaceOrder() {
  const { getTotalAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-[calc(100vh-70px)] bg-gray-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl relative"
      >
        <IoIosArrowRoundBack
          size={40}
          onClick={() => navigate("/cart")}
          className="cursor-pointer absolute top-4 left-4 z-10"
        />

        <h2 className="text-3xl font-pacifico mb-6 text-center text-orange-500">
          Place Your Order
        </h2>

        {/* First & Last Name */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-orange-600 border-amber-500"
              required
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-orange-600 border-amber-500"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="relative mb-4">
          <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-orange-600 border-amber-500"
            required
          />
        </div>

        {/* Street */}
        <div className="relative mb-4">
          <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-700">
            Street Address
          </label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="border p-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-orange-600 border-amber-500"
            required
          />
        </div>

        {/* City & State */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-700">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-orange-600 border-amber-500"
              required
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-700">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-orange-600 border-amber-500"
              required
            />
          </div>
        </div>

        {/* Zipcode & Country */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-700">
              Zip Code
            </label>
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-orange-600 border-amber-500"
              required
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-700">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-orange-600 border-amber-500"
              required
            />
          </div>
        </div>

        {/* Phone */}
        <div className="relative mb-6">
          <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-orange-600 border-amber-500"
            required
          />
        </div>

        {/* Cart Totals */}
        <div className="flex flex-col gap-2">
          <p className="font-outfit font-semibold text-xl mt-5 md:mt-0">
            Cart Totals
          </p>

          <div className="flex justify-between">
            <p className="text-gray-800">Subtotal</p>
            <span>${getTotalAmount()}</span>
          </div>

          <hr className="text-gray-500" />

          <div className="flex justify-between">
            <p className="text-gray-800">Delivery Fee</p>
            <span>$2</span>
          </div>

          <hr className="text-gray-500" />

          <div className="font-semibold flex justify-between font-mono text-lg">
            <p>Total</p>
            <span>${getTotalAmount() + 2}</span>
          </div>
          <hr className="text-gray-200" />
          <button className="bg-orange-500 text-white py-1.5 px-4 rounded-lg mt-2 cursor-pointer hover:bg-orange-600 duration-150 md:py-2">
            Proceed to payment
          </button>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
