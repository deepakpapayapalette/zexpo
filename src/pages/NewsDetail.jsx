import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { newsData, recentNews } from '../data/LocalData'
import ScrollTopAtuo from '../components/common/ScrollTopAtuo'
import newDetailImg from "../assets/images/news/news-detail.png"
import { IoIosArrowRoundForward } from "react-icons/io";

const NewsDetail = () => {
  const { id } = useParams();
  const data = newsData.find((item) => item.id === parseInt(id));

  return (
    <>
      <ScrollTopAtuo />
      <section className="container">
        {data ? (
          <div className="pt-10 rounded-sm">
            <img
              src={data?.img || newDetailImg || null}
              alt={data.title}
              className="w-full lg:h-[500px] object-cover rounded"
            />
            <div className='py-8'>
              <h1 className="text-2xl md:text-3xl font-bold mb-3">{data.title}</h1>
              <div className='mb-6 text-sm text-gray-600'>
                <span className='font-semibold'>{data?.postBy || "Zexpo Team"}</span> |
                <span className='font-semibold ml-1'>{data?.publishTime || "Just now"}</span>
              </div>
              <p className='text-para'>{data?.description}</p>
            </div>
            <div className="mt-6 sm:mt-8">
              {data?.paraContent?.map((item, index) => (
                <div className="" key={item?.id || index}>
                  <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-2">{item?.paraTitle}</h2>
                  <p className="text-webPara md:text-lg mb-8">{item?.para}</p>
                </div>
              ))}
            </div>

            <div className='mt-6 md:mt-8'>
              <h2 className='text-2xl font-semibold mb-4'>A Week of Action and Celebration</h2>
              <img src={newDetailImg} alt="Detail view" className='rounded-md w-full max-h-[600px] object-cover' />
              <p className='pt-4 text-para'>
                The seven-day festival will take place across multiple iconic venues, including the Sawai Mansingh Stadium, Central Arena, and Zexpo Pavilion. Visitors can expect to witness an exciting lineup of games — from cricket and football to badminton, cycling, and even traditional Indian sports that bring the city’s culture alive. Each day will conclude with live concerts, art showcases, and food festivals, ensuring that the event isn’t just about competition — it’s about community.
              </p>

              <div className='p-6 mt-6 bg-green-50 rounded-lg border-l-4 border-webprimary'>
                <p className='text-webprimary italic font-medium'>
                  “This exhibition has become a symbol of Jaipur’s sporting spirit,” said Rohit Verma, Exhibition Director. “It connects athletes, families, and visitors in a celebration that’s both modern and rooted in culture.”
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">Article not found.</p>
            <Link to="/news" className="text-webprimary mt-4 inline-block hover:underline">Back to News</Link>
          </div>
        )}

        {/* You May Also Like Section */}
        <div className='mt-16 mb-10'>
          <h2 className='text-xl md:text-2xl mb-6 font-semibold border-b pb-2'>You May Also Like This</h2>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
            {recentNews.map((item) => (
              <div key={item.id} className="group flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={item.img || newDetailImg}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2 leading-tight group-hover:text-webprimary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm flex-grow">
                    {item.description}
                  </p>
                  <Link to={`/news/${item.id}`} className="inline-flex items-center gap-1 text-webprimary font-bold hover:gap-2 transition-all mt-auto self-start">
                    Read More <IoIosArrowRoundForward className="text-2xl" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default NewsDetail
