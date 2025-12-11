import React from 'react'

import { Link } from 'react-router-dom';
import { FaLinkedinIn } from "react-icons/fa";
const TeamCard = ({ data }) => {
  return (
    <>
      <div key={data.id} className='founder-card flex flex-col bg-white rounded-xl shadow-md  overflow-hidden  transition duration-500 border-gray-50 border-b-[6px] hover:border-b-websecondary'>
        <div className="max-w-[100%] ">
          <div className='relative p-5'>

            <div className='  w-full h-full rounded-lg flex datas-center justify-center  overflow-hidden'>
              <img
                src={data?.img || null}
                alt="Package"
                className="founder-image w-full h-[300px] object-cover transition-transform duration-500 "
              />
            </div>
          </div>
          <div className="px-5 py-2">
            <div className='flex justify-between datas-center'>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {data?.title || data?.name || null}
                </h2>
                <p className='text-webPara'>{data?.subtitle || null}</p>
              </div>
              <div>

                <Link to={data.link || null} target='_blank'>
                  <div className='rounded-full bg-webprimary p-2 '>
                    { <FaLinkedinIn className='text-white' /> || null}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamCard
