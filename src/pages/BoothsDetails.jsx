import React from 'react'
import exBanner from '../assets/images/services/boot-detail.png'
import { FaParking, FaCoffee, FaWifi, FaHeadset } from 'react-icons/fa';
import ScrollTopAtuo from '../components/common/ScrollTopAtuo';
import ProductCard from '../components/UI/ProductCard';
import productImage from '../assets/images/product/product1.png'
import { productCards } from '../data/LocalData';

const BoothsDetails = () => {

  const facilities = [
    { name: "Parking", icon: <FaParking /> },
    { name: "Cafeteria", icon: <FaCoffee /> },
    { name: "Wi-Fi", icon: <FaWifi /> },
    { name: "Support Desk", icon: <FaHeadset /> }
  ];



  return (
    <div>
      <ScrollTopAtuo />
      <div className="w-full h-[300px] md:h-[450px] relative">
        <img src={exBanner} alt="Exhibition Banner" className="w-full h-full object-cover" />
      </div>
      {/* details of exhibitions */}
      <div className="container py-8 px-4">
        {/* Header Section */}
        <div className="mb-4">
          <h1 className="text-3xl md:text-5xl font-bold text-black font-serif tracking-wide mb-2">Booth Number 01</h1>
          <ul className="list-disc list-inside text-gray-600 text-lg">
            <li>Booth ID : Booth #A-102</li>
          </ul>
        </div>

        {/* Booth Details */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-black mb-4 font-serif">Booth Details</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-700 text-lg list-disc list-inside">
            <li>Booth ID : Booth #A-102</li>
            <li>Booth Size : 3*3 (9 sq.m)</li>
            <li>Standard Size</li>
            <li>Hall A , Section 2</li>
          </ul>
        </div>

        {/* Facilities */}
        <h2 className="text-xl font-bold text-black mb-5 font-serif">Facilities</h2>
        <div className="flex flex-wrap gap-4 mb-10">
          {facilities.map((fac, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-[#dbeafe] text-gray-700 px-5 py-2.5 rounded hover:bg-blue-200 transition-colors">
              <span className="text-gray-600 text-lg">{fac.icon}</span>
              <span className='font-medium'>{fac.name}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mb-10 space-y-4 text-gray-600 leading-relaxed text-lg">
          <p>
            A perfect mix of tech & local Knowledge, vibrant energy, and live experiment. A perfect mix of tech & local Knowledge, vibrant energy, and live experiment. A perfect mix of tech & local Knowledge, vibrant energy, and live experiment.
          </p>
        </div>

        {/* CTA Button */}
        <button className="bg-[#0b5ed7] hover:bg-blue-800 text-white font-bold py-3.5 px-10 rounded shadow-sm text-lg transition-colors">
          Registered for Booth
        </button>

        {/* Bottom Border Line - recreating the visual container style if needed, but clean whitespace is usually better. */}
        <div className="border-b border-gray-200 mt-12 mb-10"></div>
      </div>

      {/* Product */}
      <div className="container px-4 mb-16">
        <h2 className="text-2xl lg:text-5xl font-bold text-black mb-6 font-serif">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCards.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BoothsDetails

