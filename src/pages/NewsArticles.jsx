import React from 'react'
import Banner from '../components/common/Banner'
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import ScrollTopAtuo from '../components/common/ScrollTopAtuo';
import { newsData } from '../data/LocalData'

const bannerContent = {
  title: "News & Articles",
  description: "Stay updated with our latest stories, insights, and press coverage."
}

const NewsArticles = () => {
  return (
    <>
      <ScrollTopAtuo />
      <Banner data={bannerContent} />
      <div className='container mt-10'>
        <div className=''>
          <p className="text-para text-gray-600 text-lg">Stay updated with the latest happenings, city highlights, and event stories from across the country.</p>
        </div>
      </div>
      <div className="container space-top">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item, index) => (
            <div key={item.id || index} className="group flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className='relative overflow-hidden'>
                <img
                  src={item?.img}
                  alt={item.title || "News Article"}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                {/* Meta Info */}
                <div className="flex items-center justify-between text-gray-500 text-xs mb-3 font-medium uppercase tracking-wide">
                  <span>{item?.postBy || 'Zexpo Team'}</span>
                  <span>{item?.publishTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold leading-tight mb-3 text-gray-800 group-hover:text-webprimary transition-colors line-clamp-2">
                  {item?.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {item?.description}
                </p>

                {/* Action */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link to={`${item.id}`} className="inline-flex items-center gap-2 text-webprimary font-bold hover:gap-3 transition-all">
                    Read More <IoIosArrowRoundForward className="text-2xl" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default NewsArticles
