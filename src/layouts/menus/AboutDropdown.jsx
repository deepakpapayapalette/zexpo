import React from 'react';
import img from '../../assets/images/about/about-menu.png'
import { NavLink } from 'react-router-dom';

export default function AboutDropdown({ isMobile }) {
  // console.log(setIsDropdownOpen, 'setIsDropdownOpen')

  return (
    <div className="container flex items-center gap-6 lg:p-5 bg-white  w-full">
      {/* Left Image Section */}
      <div className="relative  hidden lg:block rounded-xl max-w-[400px] max-h-[200px] overflow-hidden">
        <img
          src={img}
          alt="Business workspace"
          className="max-w-full max-h-full object-cover brightness-75"
        />
        {/* <div className="absolute inset-0  rounded-2xl"></div> */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 p-2">
          <p className="text-white md:text-xl font-medium leading-relaxed max-w-full ">
            Learn about ATRN Solutions LLP, our mission, and our founders.
          </p>
        </div>
      </div>

      {/* Right Text Grid */}
      <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-x-3 gap-y-4 industries-dropdown text-para">
        <div>
          <NavLink
            to={'/about/about-us'}
            className={({ isActive }) => `text-md font-normal hover:text-webprimary ${isActive ? 'active' : ''}`}
            onClick={() => isMobile && isMobile(false)}
          >
            About Us
          </NavLink>
        </div>
        <div>
          <NavLink
            to={'/about/our-team'}
            className={({ isActive }) => `text-md font-normal hover:text-webprimary ${isActive ? 'active' : ''}`}
            onClick={() => isMobile && isMobile(false)}
          >
            Our Team
          </NavLink>
        </div>
        <div>
          <NavLink
            to={'/about/careers'}
            className={({ isActive }) => `text-md font-normal hover:text-webprimary ${isActive ? 'active' : ''}`}
            onClick={() => isMobile && isMobile(false)}
          >
            Careers
          </NavLink>
        </div>
        <div>
          <NavLink
            to={'/about/solution-portfolio'}
            className={({ isActive }) => `text-md font-normal hover:text-webprimary ${isActive ? 'active' : ''}`}
            onClick={() => isMobile && isMobile(false)}
          >
            Solution Portfolio
          </NavLink>
        </div>


      </div>
    </div>
  );
}
