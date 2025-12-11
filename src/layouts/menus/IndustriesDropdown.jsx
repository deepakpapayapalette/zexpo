import React from 'react';
import img from '../../assets/images/navbar/Industries-dropdown.png'
import { NavLink } from 'react-router-dom';

export default function IndustriesDropdown({ isMobile }) {
  // console.log(setIsDropdownOpen, 'setIsDropdownOpen')

  return (
    <div className="container flex items-center gap-6 lg:p-5 bg-white  w-full">
      {/* Left Image Section */}
      <div className="relative  hidden lg:block">
        <img
          src={img}
          alt="Business workspace"
          className="max-w-full max-h-full object-cover brightness-75"
        />
        {/* <div className="absolute inset-0  rounded-2xl"></div> */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 p-2">
          <p className="text-white md:text-xl font-medium leading-relaxed max-w-full ">
            The business domains we serve, from
            healthcare to road safety.
          </p>
        </div>
      </div>

      {/* Right Text Grid */}
      <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-x-2 gap-y-4 industries-dropdown text-webPara">
        <div>
          <NavLink
            to={'/industries/public-health'}
            className={({ isActive }) => `text-md font-normal hover:text-webprimary ${isActive ? 'active' : ''}`}
            onClick={() => isMobile && isMobile(false)}
          >
            Public Health
          </NavLink>
        </div>
        <div>
          <NavLink
            to={'/industries/skill-development'}
            className={({ isActive }) => `text-md font-normal hover:text-webprimary ${isActive ? 'active' : ''}`}
            onClick={() => isMobile && isMobile(false)}
          >
            Skill Development
          </NavLink>
        </div>
        <div>
          <NavLink
            to={'/industries/medical-tourism'}
            className={({ isActive }) => `text-md font-normal hover:text-webprimary ${isActive ? 'active' : ''}`}
            onClick={() => isMobile && isMobile(false)}
          >
            Medical Tourism
          </NavLink>
        </div>
        <div>
          <NavLink
            to={'/industries/innovations'}
            className={({ isActive }) => `text-md font-normal hover:text-webprimary ${isActive ? 'active' : ''}`}
            onClick={() => isMobile && isMobile(false)}
          >
            Innovations
          </NavLink>
        </div>
        <div>
          <NavLink
            to={'/industries/road-safety'}
            className={({ isActive }) => `text-md font-normal hover:text-webprimary ${isActive ? 'active' : ''}`}
            onClick={() => isMobile && isMobile(false)}
          >
            Road Safety
          </NavLink>
        </div>
        <div>
          <NavLink
            to={'/industries/tourism'}
            className={({ isActive }) => `text-md font-normal hover:text-webprimary ${isActive ? 'active' : ''}`}
            onClick={() => isMobile && isMobile(false)}
          >
            Tourism
          </NavLink>
        </div>
      </div>
    </div>
  );
}
