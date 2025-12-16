import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
const NewsCard = ({ item = [] }) => {
  return (
    <>
      <div className="group flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 p-4">
        <div className='relative overflow-hidden rounded-t-md mb-4'>
          <img
            src={item?.img}
            alt={item.title || "News Article"}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col flex-grow">
          {/* Meta Info */}
          <div className="flex items-center justify-between text-gray-500 text-xs mb-3 font-medium uppercase tracking-wide">
            <span>{item?.postBy || 'Zexpo Team'}</span>
            <span>{item?.publishTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold leading-tight mb-3 text-gray-800 group-hover:text-webprimary transition-colors line-clamp-1">
            {item?.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
            {item?.description}
          </p>

          {/* Action */}
          <div className="mt-auto pt-4 border-t border-gray-100">
            <Link to={`/news/${item.id}`} className="inline-flex items-center gap-2 text-webprimary font-bold hover:gap-3 transition-all">
              Read More <IoIosArrowRoundForward className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsCard

