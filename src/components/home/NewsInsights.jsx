import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import news from "../../assets/images/home/news.png"
import { FaRegClock, FaRegCalendarAlt, FaRegEye } from "react-icons/fa";
import HeadingBtn from '../common/HeadingBtn';
import { Link } from 'react-router-dom';

const pathbreakingData = [
  {
    id: 1,
    title: "Jaipur Sport Events 2025  ",
    desc: "The city’s creative energy comes alive through colors, design, and culture.",
    date: "February 20, 2025",
    team: "By Zexpo Team ",
    views: "2.5k",
    img: news
  },
  {
    id: 2,
    title: "Jaipur Sport Events 2025  ",
    desc: "The city’s creative energy comes alive through colors, design, and culture.",
    date: "February 20, 2025",
    team: "By Zexpo Team ",
    views: "2.5k",
    img: news
  },
  {
    id: 3,
    title: "Jaipur Sport Events 2025  ",
    desc: "The city’s creative energy comes alive through colors, design, and culture.",
    date: "February 20, 2025",
    team: "By Zexpo Team ",
    views: "2.5k",
    img: news
  }
]
const NewsInsights = () => {
  return (
    <section className="space-top ">
      <div className="container">
        <div className="mb-6">
          <h3 className="md:text-5xl text-3xl font-semibold mb-2 leading-tight">
            News & <span className="text-webprimary font-sourcePro">Articles</span>
          </h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {pathbreakingData.map((item, index) => (
            <div key={item?.id || index} className='p-4 px-5 news-card w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
              <div className='relative w-full' >
                <img
                  src={item?.img || null}
                  alt="Zen Drive Safe App Launch"
                  className="w-full h-atuo object-cover rounded-t-lg "
                />
                {/* Content */}
                <div className="content relative pt-5">
                  <div className=" inner-content relative space-y-3">
                    {/* Meta Info */}
                    <div className="flex justify-between text-gray-500 text-sm mb-2">
                      <div className="flex items-center gap-1">
                        {item?.team || 'By Zexpo Team ' || null}
                      </div>
                      <div className="flex items-center gap-1">
                        Published on  {item?.date || null}
                      </div>
                      {/* <div className="flex items-center gap-1">
                        <FaRegEye /> {item?.views || null}
                      </div> */}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl  font-semibold  leading-snug">
                      {item?.title || null}
                    </h3>
                    <p className='text-para'>{item?.desc || null}</p>
                  </div>
                  <div className="read-more pb-4">
                    <Link to={`news/${item.id}`} className="inline-flex items-center gap-1 text-webprimary mt-3">
                      <button className="font-bold">
                        Read More <IoIosArrowRoundForward className="text-2xl inline read-more-icon" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsInsights
