import React from 'react'
import Banner from '../components/common/Banner'
import OurFocusArea from '../components/exhibition/OurFocusArea'

import OurProcess from '../components/exhibition/OurProcess'
import IndustriesWeServe from '../components/exhibition/IndustriesWeServe'
import HealthcareCTA from '../components/exhibition/HealthcareCTA'
import ScrollTopAtuo from '../components/common/ScrollTopAtuo'
import Exhibitions from '../components/exhibition/Exhibitions'
import TrendingExhibitions from '../components/home/TrendingExhibitions'
import ExhibitionsNearYou from '../components/exhibition/ExhibitionsNearYou'
const bannerContent = {
  // image: bannerImage,
  // title: "Exhibition",
  title2: "Exhibition",
  description: "Comprehensive healthcare technology solutions designed to transform patient care and improve health outcomes."
}
const Exhibition = () => {
  return (
    <>
      <ScrollTopAtuo />
      <Banner data={bannerContent} />
      <Exhibitions />
      <TrendingExhibitions />
      <ExhibitionsNearYou />
      {/*<OurFocusArea />
     <OurProcess />
      <IndustriesWeServe />
      <HealthcareCTA /> */}
    </>
  )
}

export default Exhibition
