import React from 'react'
import { FaRegClock, FaRegCalendarAlt, FaRegEye } from "react-icons/fa";
// import newsImg from "../../assets/images/home/news-article.png"
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";


const NewsCard = ({ data = [] }) => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={index} className="p-4 news-card w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* <Link to={`news/${item.id}`} state={item}> */}
              <div className='relative'>
                <img
                  src={item?.img || null}
                  alt="Zen Drive Safe App Launch"
                  className="w-full h-atuo object-cover rounded-t-lg "
                />
                {/* Content */}
                <div className="content relative pt-5">

                  <div className=" inner-content relative">
                    {/* Meta Info */}
                    <div className="flex justify-between text-gray-500 text-sm mb-2">
                      <div className="flex items-center gap-1">
                        <FaRegClock /> {item?.duration || '12Min' || null}
                      </div>
                      <div className="flex items-center gap-1">
                        <FaRegCalendarAlt /> {item?.date || null}
                      </div>
                      <div className="flex items-center gap-1">
                        <FaRegEye /> {item?.views || null}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl  font-bold  leading-snug">
                      {item?.title || null}
                    </h3>

                    {/* Description  max 4 lines show otherwise show ...*/}

                    <p className="text-para text-sm mt-2 line-clamp-3">
                      {item?.description || null}
                    </p>
                  </div>
                  <div className="read-more pb-4">
                    <Link to={`${item.id}`} className="flex items-center gap-1 text-webprimary mt-3">
                      <button className="font-bold">
                        Read More <IoIosArrowRoundForward className="text-2xl inline read-more-icon" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default NewsCard
