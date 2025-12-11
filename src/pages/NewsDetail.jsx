import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
// import newDetailImg from '../assets/images/news/news-detail.png'
// import newsDetail from '../assets/images/news/news-detail2.png'
import { articlesData } from '../data/LocalData'
import ScrollTopAtuo from '../components/common/ScrollTopAtuo'

const NewsDetail = () => {


  const { id } = useParams();
  const data = articlesData.find((item) => item.id === parseInt(id));
  // console.log(data, "id");
  // const articleState = useLocation();


  // const data = articleState.state;

  return (
    <>
      <ScrollTopAtuo />
      <section className="container">
        {data ? (
          <div className=" pt-10 rounded-sm ">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-webprimary mb-8">{data.title}</h1>
            <img
              src={data?.img || newsDetail || null}
              alt={data.title}
              className="w-full lg:h-[600px] object-cover rounded"
            />
            <div className="mt-6 sm:mt-8">
              {data?.paraContent?.map((item, index) => (
                <div className="" key={item?.id}>
                  <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-2">{item?.paraTitle || "A Smarter Way to Drive Safe"}</h2>
                  <p className="text-webPara md:text-lg  mb-8">{item?.para || "description"}</p>
                </div>
              ))}
            </div>
            <ul className='list-disc ps-4'>
              {data?.paraListing?.map((item, index) => (
                <li key={item?.id} className="mb-2 md:text-lg text-webPara ">
                  <span className='font-bold'>{item?.paraTitle || "A Smarter Way to Drive Safe" || null} </span>
                  <span>{item?.para || null}</span>
                </li>
              ))}
            </ul>

            <div className='mt-6 md:mt-12'>
              <img src={data?.img2 || newDetailImg || null} alt="image" className='rounded-md w-full h-auto' />
              <div className="mt-6 sm:mt-8">
                {data?.paraContent?.map((item, index) => (
                  <div className="" key={item?.id}>
                    <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-2">{item?.paraTitle || "title"}</h2>
                    <p className="text-webPara md:text-lg  mb-8">{item?.para || "description"}</p>
                  </div>
                ))}
              </div>

              <ul className='list-disc ps-4 mt-6 md:mt-8'>
                {data?.paraListing?.map((item, index) => (
                  <li key={item?.id} className="mb-2 md:text-lg text-webPara ">
                    <span className='font-bold'>{item?.paraTitle || null} </span>
                    <span>{item?.para || null}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No article data found.</p>
        )}
      </section>
    </>
  )
}

export default NewsDetail
