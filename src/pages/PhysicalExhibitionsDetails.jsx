import React from 'react'
import exBanner from '../assets/images/services/ex-banner.png'
import { FaRegCalendarAlt, FaParking, FaCoffee, FaWifi, FaHeadset } from 'react-icons/fa';
import { MdOutlineLocationOn } from "react-icons/md";
import ScrollTopAtuo from '../components/common/ScrollTopAtuo';
import TrendingExhibitions from '../components/home/TrendingExhibitions';
import boot1 from '../assets/images/services/boot1.png'
import boot2 from '../assets/images/services/boot2.png'
import boot3 from '../assets/images/services/boot3.png'
import boot4 from '../assets/images/services/boot4.png'
import exImage1 from '../assets/images/services/ex-img1.png'
import exImage2 from '../assets/images/services/ex-img2.png'
import exImage3 from '../assets/images/services/ex-img3.png'
import exImage4 from '../assets/images/services/ex-img4.png'
import { Link } from 'react-router-dom';
import ThemeButton from '../components/UI/ThemeButton';

const imgArr = [exImage1, exImage2, exImage3, exImage4]


const PhysicalExhibitionsDetails = () => {
  // Hardcoded data to match the design image perfectly
  const details = [
    { label: "Physical Exhibition", highlight: true },
    { label: "12+ Active Events" },
    { label: "Art & Craft Mela" },
    { label: "Total area 10,000 sq ft" },
    { label: "05 Booths Capacity" },
    { label: "320+ Product Listed" },
    { label: "85 Participant Exhibitors" },
    { label: "1250+ Visitors Registered" }
  ];

  const facilities = [
    { name: "Parking", icon: <FaParking /> },
    { name: "Cafeteria", icon: <FaCoffee /> },
    { name: "Wi-Fi", icon: <FaWifi /> },
    { name: "Support Desk", icon: <FaHeadset /> }
  ];

  const booths = [
    { _id: 1, id: "Booth #A-102", number: "01", size: "3*3 (9 sq.m)", price: "₹15,000/days", status: "Available", image: boot1 },
    { _id: 2, id: "Booth #A-103", number: "02", size: "3*3 (9 sq.m)", price: "₹15,000/days", status: "Available", image: boot2 },
    { _id: 3, id: "Booth #A-104", number: "03", size: "3*3 (9 sq.m)", price: "₹15,000/days", status: "Booked", image: boot3 },
    { _id: 4, id: "Booth #A-105", number: "04", size: "3*3 (9 sq.m)", price: "₹15,000/days", status: "Booked", image: boot4 },
    { _id: 5, id: "Booth #A-106", number: "05", size: "3*3 (9 sq.m)", price: "₹15,000/days", status: "Available", image: boot4 }
  ];

  return (
    <>
      <ScrollTopAtuo />
      <div className=''>
        {/* Banner */}
        <div className="w-full h-[300px] md:h-[450px] relative">
          <img src={exBanner} alt="Exhibition Banner" className="w-full h-full object-cover" />
        </div>
        {/* details of exhibitions */}
        <div className="container py-8 px-4">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h1 className="text-3xl md:text-5xl font-bold text-black font-serif tracking-wide">Lucknow Expo Center</h1>
            <a href="#" className="flex items-center text-[#0b5ed7] font-bold text-lg hover:underline mt-4 md:mt-0">
              <MdOutlineLocationOn className="text-2xl mr-1" />
              Get Directions
            </a>
          </div>

          {/* Date and Location */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 text-gray-600 mb-10 text-lg font-medium">
            <div className="flex items-center gap-2">
              <FaRegCalendarAlt className="text-gray-500" />
              <span>12/11/2025 - 10/12/2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineLocationOn className='text-xl text-gray-500' />
              <span>Lucknow City Center, Uttar Pradesh</span>
            </div>
          </div>

          {/* Exhibition Details */}
          <h2 className="text-xl font-bold text-black mb-5 font-serif">Exhibition Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4 mb-10">
            {details.map((item, index) => (
              <div key={index} className="flex items-center text-gray-700">
                <span className={`w-2 h-2 rounded-full mr-3 ${item.highlight ? 'bg-[#0b5ed7]' : 'bg-gray-500'}`}></span>
                <span className={`${item.highlight ? 'text-[#0b5ed7] font-bold' : ''} text-lg`}>{item.label}</span>
              </div>
            ))}
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
            <p>
              A perfect mix of tech & local Knowledge, vibrant energy, and live experiment. A perfect mix of tech & local Knowledge, vibrant energy, and live experiment.
            </p>
          </div>

          {/* CTA Button */}
          <button className="bg-[#0b5ed7] hover:bg-blue-800 text-white font-bold py-3.5 px-10 rounded shadow-sm text-lg transition-colors">
            Book Pass
          </button>

          {/* Bottom Border Line - recreating the visual container style if needed, but clean whitespace is usually better. */}
          <div className="border-b border-gray-200 mt-12"></div>
        </div>

        {/* Explore Booths section */}
        <div className="container pt-8">
          <h2 className="text-2xl md:text-5xl font-semibold font-serif mb-8 text-black">
            Explore <span className="text-[#0b5ed7] font-sourcePro"> Booths</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {booths.map((booth, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                {/* Image Container */}
                <div className="relative p-3">
                  <div className="relative rounded-lg overflow-hidden">
                    <img src={booth.image} alt={`Booth ${booth.number}`} className="w-full h-64 object-cover" />
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full animate-pulse ${booth.status === 'Available' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      {booth.status}
                    </div>
                  </div>
                  {/* Pagination Dots Mock */}
                  <div className="flex justify-center gap-1 mt-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-800"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 pb-5 pt-2">
                  <h3 className="text-xl font-bold font-serif mb-1">Booth Number {booth.number}</h3>
                  <p className="text-gray-500 text-sm mb-1">Booth ID : {booth.id}</p>
                  <p className="text-gray-500 text-sm mb-3">Booth Size : {booth.size}</p>
                  <p className="text-[#0b5ed7] font-bold text-lg mb-4">{booth.price}</p>

                  <div className="flex gap-4">
                    <Link to={`booths/${booth._id}`}>
                      <ThemeButton variant='fill' className='w-full'>
                        Book Booth
                      </ThemeButton>
                    </Link>
                    <Link to={`booths/${booth._id}`}>
                      <ThemeButton className='w-full'>
                        View Details
                      </ThemeButton>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-10 container'>
          <h2 className="text-2xl md:text-5xl font-semibold font-serif mb-8 text-black">
            Our Trending <span className="text-[#0b5ed7] font-sourcePro"> Exhibitions</span>
          </h2>

          <div className='grid md:grid-cols-2 gap-4 '>
            {
              imgArr.map((img, idx) => (
                <div key={idx} className=''>
                  <img src={img} alt="" className='w-full h-auto object-cover' />
                </div>
              ))
            }
          </div>
        </div>
        <TrendingExhibitions />
      </div>
    </>
  )
}

export default PhysicalExhibitionsDetails
