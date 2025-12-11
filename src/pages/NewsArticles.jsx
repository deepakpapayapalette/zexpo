import React from 'react'
import "react-multi-carousel/lib/styles.css"
import { Clock, Calendar, Eye, ArrowRight } from 'lucide-react';
import { FaRegClock, FaRegCalendarAlt, FaRegEye } from "react-icons/fa";
import news1 from '../assets/images/news/new1.png'
import news2 from '../assets/images/news/news2.png'
import news3 from '../assets/images/news/news3.png'
import news4 from '../assets/images/news/news4.png'
import latest1 from '../assets/images/news/latest.png'
import Banner from '../components/common/Banner'
import { Link } from 'react-router-dom';
import newsImg from "../assets/images/home/news-article.png"
import { articlesData, UpdatesNews } from '../data/LocalData';
import { IoIosArrowRoundForward } from "react-icons/io";
import ScrollTopAtuo from '../components/common/ScrollTopAtuo';
const Carousel = React.lazy(() => import("react-multi-carousel"));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3, dots: true, partialVisibilityGutter: 24,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2, showDots: false, partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1, showDots: false, partialVisibilityGutter: 16,
  },
};
const bannerContent = {
  // image: bannerImage,
  title: "News & Articles",
  description: "Stay updated with our latest stories, insights, and press coverage."
}

const newsItems = [
  {
    id: 1,
    title: "UP CM Yogi Aditya Nath on Jan Drive Safe Project",
    category: "Jan Drive Safe",
    image: news1,
    duration: "12Min",
    date: "12/01/2025",
    views: "2.5k"
  },
  {
    id: 2,
    title: "UP CM Yogi Aditya Nath on Jan Drive Safe Project",
    category: "Jan Drive Safe",
    image: news2,
    duration: "12Min",
    date: "12/01/2025",
    views: "2.5k"
  },
  {
    id: 3,
    title: "UP CM Yogi Aditya Nath on Jan Drive Safe Project",
    category: "Jan Drive Safe",
    image: news3,
    duration: "12Min",
    date: "12/01/2025",
    views: "2.5k"
  }
];
const featuredNews = {
  title: "UP CM Yogi Aditya Nath on Jan Drive Safe Project",
  category: "Jan Drive Safe",
  image: news1
};


const NewsArticles = () => {
  return (
    <>
      <ScrollTopAtuo />
      <Banner data={bannerContent} />
      <div className='container space-top'>
        <h2 className='text-2xl sm:text-3xl lg:text-5xl text-webprimary mb-6 lg:mb-8'>
          Latest News
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured News - Large Card */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg h-full">
            <img
              src={featuredNews.image}
              alt={featuredNews.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <p className="text-sm sm:text-base mb-2 sm:mb-3 font-medium">
                {featuredNews.category}
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                {featuredNews.title}
              </h2>
              <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-colors">
                Read Now
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* News List */}
          <div className="space-y-4 sm:space-y-6">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 sm:mb-4">
                        {item.category}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye size={16} />
                          <span>{item.views}</span>
                        </div>
                      </div>
                    </div>

                    {/* Read Now Button */}
                    <button className="flex items-center gap-2 px-4 py-2 border-2 border-black text-black font-semibold rounded-md hover:bg-black hover:text-white transition-colors w-fit">
                      Read Now
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container space-top">
        <h2 className='text-2xl lg:text-4xl text-webprimary mb-6 lg:mb-8'>
          Our Previous News & Updates
        </h2>
        <div>
          <Carousel
            // customButtonGroup={<CustomButtonGroup />}
            responsive={responsive}
            infinite
            keyBoardControl
            swipeable
            draggable


            showDots={true}
            containerClass="pt-4 pb-10 lg:pb-5"
            itemClass="ps-0 pe-4 pt-0"
            // arrows={isLargeScreen}
            renderButtonGroupOutside={false}
            partialVisible
            arrows={false}
          >
            {UpdatesNews.map((item) => (
              <div className="relative group overflow-hidden rounded-lg shadow-lg h-full" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                  <div className=" md:text-sm  text-xs mb-1 sm:mb-3 font-medium">
                    {item.category}
                  </div>
                  <h3 className="text-lg  font-normal mb-3 sm:mb-6 leading-1">
                    {item.title}
                  </h3>
                  <Link to={`${item.id}`} state={item} className="flex items-center gap-2 hover:text-gray-200 transition-colors">
                    <button className="theme-btn flex items-center gap-2 !text-white !border-white  ">
                      Read Now
                      <ArrowRight size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="container space-top">
        <h2 className='text-2xl sm:text-3xl lg:text-5xl text-webprimary mb-6 lg:mb-8'>
          Latest Articles
        </h2>

        <div className="relative group overflow-hidden rounded-lg shadow-lg h-full">
          <img
            src={latest1 || null}
            alt={'image'}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute lg:bottom-20 bottom-0 left-0 right-0 p-6 sm:p-8 text-white">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-4 leading-tight">
              AETURN Launches Zen Drive Safe App
            </h2>
            <p className='text-white pb-4 md:text-lg'>
              Innovative road safety solution to monitor driver fitness, vehicle health, and driving behaviour.
            </p>
            <button className="flex items-center gap-2 theme-btn-fill ">
              Read Now
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
      <div className="container space-top">

        <h2 className='text-2xl lg:text-4xl text-webprimary mb-6 lg:mb-8'>
          Our Previous Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesData.map((item, index) => (
            <div key={item.id || index} className="p-4 news-card w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                    <Link to={`${item.id}`} className="inline-flex items-center gap-1 text-webprimary mt-3">
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
    </>
  )
}

export default NewsArticles
