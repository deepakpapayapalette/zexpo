import React from 'react'
import Banner from '../components/common/Banner'
import OurStory from '../components/about/OurStory'
import MissionVisionSection from '../components/about/MissionVisionSection'
import OurCoreValue from '../components/about/OurCoreValue'
import LeadershipTeam from '../components/about/LeadershipTeam'
import ImpactCTA from '../components/about/ImpactCTA'

const bannerContent = {
  // image: image,
  title: "About Zeniverse Ventures",
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
      <OurCoreValue />
      <LeadershipTeam />
      <ImpactCTA />
    </>
  )
}

export default AboutUs

