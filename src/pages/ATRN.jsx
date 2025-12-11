import React from 'react'
import Banner from '../components/common/Banner'
import atrnImg from '../assets/images/home/atrn-icon.jpg'
import HeadSection from '../components/ATRN/HeadSection'
import AboutProjectSection from '../components/ATRN/AboutProjectSection'
import RevenueProjectionChart from '../components/ATRN/RevenueProjectionChart'
import LeadingInvestors from '../components/ATRN/LeadingInvestors'
import ProjectGallery from '../components/ATRN/ProjectGallery'
import WorkWithAeturn from '../components/ATRN/WorkWithAeturn'
import FutureVisionBanner from '../components/ATRN/FutureVisionBanner'

const bannerContent = {
  // image: image,
  title: "AETURN",
  description: "ATRN Solutions LLP  (“AETURN”), is an Indian startup focused on public health digitalization and innovative solutions for global projects.",

}
const ATRN = () => {
     React.useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
  return (
    <>
      <Banner data={bannerContent} />
      <div className=' container'>
        <div className='atrn-icon w-[150px] h-[150px] rounded-full overflow-hidden shadow-md relative top-[-60px]'>
          <img src={atrnImg} alt="atrn" />
        </div>
        <HeadSection />
        <AboutProjectSection />
        <RevenueProjectionChart />

      </div>
      <LeadingInvestors />
      <ProjectGallery />
      <WorkWithAeturn />
      <FutureVisionBanner />
    </>
  )
}

export default ATRN

