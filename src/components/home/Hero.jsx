import React from 'react'
import banner2 from "../../assets/images/home/home-banner.gif"
import { Link } from 'react-router-dom'
import ThemeButton from '../UI/ThemeButton'


const Hero = () => {
  return (
    <div className='overflow-hidden bg-cover bg-right bg-no-repeat z-20 relative flex items-center banner w-full lg:h-[85vh] md:h-[80vh] h-[70vh]' style={{ backgroundImage: `url(${banner2})` }}>
      <div className="container z-20">
        <div className=' text-white flex  justify-center items-center '>
          <div className="text-center">
            <h1 className='lg:text-[64px] md:text-4xl text-2xl font-semibold mb-2 font-sourcePro' style={{ lineHeight: '1.3' }} >
              ZEXPO — Your Gateway to Global <br /> Exhibitions.
            </h1>
            <p className='md:text-xl text-white'>Discover events, experiences, and opportunities that move you.</p>
            <div className='mt-5 md:mt-8 gap-4 flex justify-center'>
              <Link to="about/solution-portfolio" >
                <ThemeButton variant='fill' className="text-white text-xl" >
                  Explore Exhibitions
                </ThemeButton>
              </Link>
              <Link to="#"><ThemeButton className=" hover:border-websecondary border-white text-white text-xl">
                Explore Near Me
              </ThemeButton></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='z-10 absolute inset-0 bg-black opacity-70'></div>
    </div >
  )
}

export default Hero
