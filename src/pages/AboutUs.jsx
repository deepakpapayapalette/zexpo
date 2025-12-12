import React from 'react'
import Banner from '../components/common/Banner'
import OurStory from '../components/about/OurStory'
import MissionVisionSection from '../components/about/MissionVisionSection'
import OurCoreValue from '../components/about/OurCoreValue'
import LeadershipTeam from '../components/about/LeadershipTeam'
import ImpactCTA from '../components/about/OurNewsletter'
import bannerImage from '../assets/images//about/about-banner.png'

const bannerContent = {
  image: bannerImage,
  title: "ABOUT",
  title2: "ZEXPO",
  description: "Pioneering the future of healthcare through innovative technology solutions and pathbreaking initiatives."
}
const AboutUs = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Banner data={bannerContent} />
      <OurStory />
      <MissionVisionSection />
      {/* <OurCoreValue /> */}
      <LeadershipTeam />
      <ImpactCTA />
    </>
  )
}

export default AboutUs

