import React from 'react'
import { Link } from "react-router-dom";
import ThemeButton from "../UI/ThemeButton";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHeart,
  FaRegHeart,
  FaSortAmountDown,
} from "react-icons/fa";
const ExCard = ({ item = [] }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative h-56 w-full">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        {/* Type Tag */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded text-sm font-medium text-white ${item.type === "Physical Exhibitions"
              ? "bg-[#5992b9]/90"
              : "bg-gray-500/90"
              }`}
          >
            {item.type}
          </span>
        </div>
        {/* Heart Icon */}
        <div className="absolute top-4 right-4">
          <button className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-colors">
            <FaRegHeart />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-grow flex flex-col">
        <h4 className="text-xl font-bold text-black mb-3">
          {item.title}
        </h4>

        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2 text-gray-600 text-sm">
            <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
            <span>{item.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <FaCalendarAlt className="flex-shrink-0" />
            <span>{item.date}</span>
          </div>
        </div>

        <div className="mb-3">
          <h5 className="font-bold text-black text-sm mb-2">Events Details</h5>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 list-disc list-inside">
            <li>{item.activeEvents}</li>
            <li>{item.category}</li>
          </ul>
        </div>

        <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">
          {item.desc}
        </p>

        <Link to={`${item.id}`} className="mt-auto">
          <ThemeButton variant="fill" className="w-full rounded-lg py-3">
            Explore Exhibitions
          </ThemeButton>
        </Link>
      </div>
    </div>
  )
}

export default ExCard
