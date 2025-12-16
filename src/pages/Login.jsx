import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Login Section */}
      <div className="bg-white rounded shadow-sm border border-gray-100 p-6 mb-6 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold font-serif text-black">Login</h2>
            <FaCheckCircle className="text-blue-600 text-sm" />
          </div>
          <p className="text-gray-500 text-sm mt-1">+91 7662262656</p>
        </div>
        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded font-medium hover:bg-blue-50 transition-colors">
          Change Number
        </button>
      </div>

      {/* Delivery Address Section */}
      <div className="bg-white rounded shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-bold font-serif text-black mb-6">Delivery Address</h2>

        <button className="border border-blue-600 text-blue-600 px-6 py-2.5 rounded font-medium hover:bg-blue-50 transition-colors mb-6">
          Use My Current Locations
        </button>

        {/* Address Type */}
        <div className="flex gap-8 mb-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="addressType" defaultChecked className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <span className="font-bold text-gray-800">Home</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="addressType" className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <span className="font-bold text-gray-800">Office</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="addressType" className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <span className="font-bold text-gray-800">Other</span>
          </label>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Enter Your Name</label>
            <input type="text" placeholder="Enter Your Name" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Enter Your Email ID (Optional)</label>
            <input type="email" placeholder="Enter Your Email Id" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Enter Your State</label>
            <input type="text" placeholder="Enter Your Name" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Enter Your Pin Code</label>
            <input type="text" placeholder="Enter Your Email Id" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Enter Your City</label>
            <input type="text" placeholder="Enter Your Name" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Enter Your Street Address 1</label>
            <input type="text" placeholder="Enter Your Email Id" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Enter Your Street Address 2</label>
            <input type="text" placeholder="Enter Your Name" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-blue-500" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Landmark (Optional)</label>
            <input type="text" placeholder="Enter Your Email Id" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-blue-500" />
          </div>
        </form>
      </div>

      <div className="mt-8">
        <button className="bg-[#0b5ed7] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition-colors shadow-sm">
          Add New Address
        </button>
      </div>
    </div>
  )
}

export default Login

