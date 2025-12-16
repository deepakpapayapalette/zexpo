import React from 'react'
import Banner from '../components/common/Banner'
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import ScrollTopAtuo from '../components/common/ScrollTopAtuo';
import { newsData } from '../data/LocalData'
import NewsCard from '../components/UI/NewsCard';

const bannerContent = {
  title: "News & ",
  title2: 'Articles',
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
            <NewsCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default NewsArticles
