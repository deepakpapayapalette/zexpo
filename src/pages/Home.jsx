import React, { lazy, Suspense, useEffect } from 'react'
import '../assets/styles/home.css'
import Loader from '../layouts/Loader'
import WhyChooseUs from '../components/home/WhyChooseUs'
// import CustomerTestimonial from '../components/home/Testimonials'

const Hero = lazy(() => import('../components/home/Hero'))
const AboutUsIntro = lazy(() => import('../components/home/AboutUsIntro'))
const TrendingExhibitions = lazy(() => import('../components/home/TrendingExhibitions'))
const OurFocusSection = lazy(() => import('../components/home/OurFocusSection'))
const AISolutionsSection = lazy(() => import('../components/home/AISolutionsSection'))
const VentureStudioSection = lazy(() => import('../components/home/VentureStudioSection'))
const UpcomingExhibitions = lazy(() => import('../components/home/UpcomingExhibitions'))
const PathInitiatives = lazy(() => import('../components/home/PathInitiatives'))
const NewsInsights = lazy(() => import('../components/home/NewsInsights'))
const FutureTogether = lazy(() => import('../components/home/FutureTogether'))
const ExpoProcess = lazy(() => import('../components/home/ExpoProcess'))
const CustomerTestimonial = lazy(() => import('../components/home/Testimonials'))


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
