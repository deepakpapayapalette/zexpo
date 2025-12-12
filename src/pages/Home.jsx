import React, { lazy, Suspense, useEffect } from 'react'
import '../assets/styles/home.css'
import Loader from '../layouts/Loader'

const Hero = lazy(() => import('../components/home/Hero'))
const AboutUsIntro = lazy(() => import('../components/home/AboutUsIntro'))
const TrendingExhibitions = lazy(() => import('../components/home/TrendingExhibitions'))
const UpcomingExhibitions = lazy(() => import('../components/home/UpcomingExhibitions'))
const NewsInsights = lazy(() => import('../components/home/NewsInsights'))
const ExpoProcess = lazy(() => import('../components/home/ExpoProcess'))
const CustomerTestimonial = lazy(() => import('../components/home/CustomerTestimonial'))
const WhyChooseUs = lazy(() => import('../components/home/WhyChooseUs'))


const HomePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Hero />
      <AboutUsIntro />
      <TrendingExhibitions />
      <UpcomingExhibitions />
      <ExpoProcess />
      <WhyChooseUs />
      <NewsInsights />
      <CustomerTestimonial />
    </Suspense>
  )
}

export default HomePage
