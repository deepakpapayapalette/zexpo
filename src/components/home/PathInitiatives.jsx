import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import initiativeImg from "../../assets/images/home/initiative.png"
import { FaRegClock, FaRegCalendarAlt, FaRegEye } from "react-icons/fa";
import HeadingBtn from '../common/HeadingBtn';
import bizaarioImg from "../../assets/images/home/bizaario.png"
import { Link } from 'react-router-dom';
const pathbreakingData = [
  {
    id: 1,
    title: "The trend was noticed during a survey by Bumble",
    desc: "Empowering Youth to Lead",
    date: "12/01/2025",
    time: "12Min",
    views: "2.5k",
    img: initiativeImg
  },
  {
    id: 2,
    title: "The trend was noticed during a survey by Bumble",
    desc: "Empowering Youth to Lead",
    date: "12/01/2025",
    time: "12Min",
    views: "2.5k",
    img: initiativeImg
  },
  {
    id: 3,
    title: "The trend was noticed during a survey by Bumble",
    desc: "Empowering Youth to Lead",
    date: "12/01/2025",
    time: "12Min",
    views: "2.5k",
    img: initiativeImg
  }
]
const PathInitiatives = () => {
  return (
    <>
      <section className="space-top ">
        <div className="container">
          <div className="mb-6">
            <div className=" mb-4">
              <HeadingBtn text="Pathbreaking Initiatives" />
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold text-webprimary mb-2 leading-tight">
              A Visionary Initiative to Shape India's Future
            </h3>
            <p className="text-gray-700 text-base md:text-lg mb-8">
              Empowering Young Minds to Become Super Citizens for a Developed India by 2047
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {pathbreakingData.map((item, index) => (
              <div key={item?.id || index} className='p-4 news-card w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                <div className='relative' >
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
                      <h3 className="text-xl  font-semibold  leading-snug">
                        {item?.title || null}
                      </h3>

                      {/* Description  max 4 lines show otherwise show ...*/}


                    </div>
                    <div className="read-more pb-4">
                      <Link to={`news/${item.id}`} className="inline-flex items-center gap-1 text-webprimary mt-3 ">
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
        <div className='container space-top'>
          <div>
            <div className='flex md:flex-row flex-col gap-6'>
              <div className='space-y-3 md:w-1/2 order-2 md:order-1'>
                <h3 className='text-webprimary font-semibold text-2xl '>BIZAARIO CARE - Global Medical Tourism: Building World's Largest Doctor Network for Case Referrals</h3>
                <p className='text-para'>
                  India reports over 500,000 road accidents and more than 180,000 fatalities annually, contributing to a 3% loss in the nation's GDP. Unfortunately, despite concerted efforts, these numbers continue to rise.
                </p>
                <div>
                  <button className='theme-btn-fill'>Visit Website</button>
                </div>
              </div>
              <div className='md:w-1/2 md:order-2 order-1 '>
                <img src={bizaarioImg || null} alt="image" className='w-full h-auto' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PathInitiatives
