import React from 'react'
import Banner from '../components/common/Banner'
import OurFocusArea from '../components/our-services/OurFocusArea'

import OurProcess from '../components/our-services/OurProcess'
import IndustriesWeServe from '../components/our-services/IndustriesWeServe'
import HealthcareCTA from '../components/our-services/HealthcareCTA'
import ScrollTopAtuo from '../components/common/ScrollTopAtuo'
const bannerContent = {
  // image: bannerImage,
  title: "Our Services",
  description: "Comprehensive healthcare technology solutions designed to transform patient care and improve health outcomes."
}
const OurServices = () => {
  return (
    <>
      <ScrollTopAtuo />
      <Banner data={bannerContent} />
      <OurFocusArea />
      <OurProcess />
      <IndustriesWeServe />
      <HealthcareCTA />
    </>
  )
}

export default OurServices
