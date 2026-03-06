import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

function PlaceOrder() {
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
      ><IoIosArrowRoundBack size={40} onClick={()=>navigate("/cart")} className="cursor-pointer absolute top-4 left-4 z-999"/>
        <h2 className="text-3xl font-pacifico mb-6 text-center text-orange-500">
          Place Your Order
        </h2>

        {/* First & Last Name */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            className="border p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600 border-amber-500"
            required
          />

          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            className="border p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600 border-amber-500"
            required
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="border p-3 rounded-md w-full mb-4 focus:outline-none focus:ring-1 focus:ring-orange-600 border-amber-500"
          required
        />

        {/* Street */}
        <input
          type="text"
          name="street"
          placeholder="Street Address"
          value={formData.street}
          onChange={handleChange}
          className="border p-3 rounded-md w-full mb-4 focus:outline-none focus:ring-1 focus:ring-orange-600 border-amber-500"
          required
        />

        {/* City & State */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600 border-amber-500"
            required
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="border p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600 border-amber-500"
            required
          />
        </div>

        {/* Zipcode & Country */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="zipcode"
            placeholder="Zip Code"
            value={formData.zipcode}
            onChange={handleChange}
            className="border p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600 border-amber-500"
            required
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="border p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600 border-amber-500"
            required
          />
        </div>

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border p-3 rounded-md w-full mb-6 focus:outline-none focus:ring-1 focus:ring-orange-600 border-amber-500"
          required
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 duration-150 cursor-pointer"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default PlaceOrder;
