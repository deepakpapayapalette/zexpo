import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
const ThemeCard = ({ data = [], buttonText }) => {

  return (
    <div className='flex flex-col'>
      <div className="max-w-[100%] bg-white rounded-2xl border border-gray-300 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Image */}


        {data?.img ?
          <div className='p-5'>
            <img
              src={data?.img || null}
              alt="Package"
              className="w-full max-h-[650px] object-cover"
            />
          </div>
          : null
        }
        {/* Content */}
        <div className="px-5 py-2 pb-6">
          <div className=''>
            <div>
              {/* Package Name */}
              {data.title || data?.name ?
                <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                  {data?.title || data?.name || null}
                </h2>
                : null
              }

              <div className="mb-4">
                <p className={`text-webPara text-lg ${data?.subTitle || data?.category ? " pb-1" : ""} `}>{data?.subTitle || data?.category || null}</p>
                <p className="text-webPara text-sm">{data?.para || null}</p>
              </div>
            </div>
          </div>
          {data?.listing ?
            <div className='mb-4'>
              <ul>
                {data?.listing?.map((item, index) => (
                  <li key={index} className="text-webPara text-sm">{item}</li>
                ))}
              </ul>
            </div>
            : null
          }

          {/* Call Now Button */}
          {data.btnText || buttonText ?
            <button className="theme-btn-fill ">
              {data.btnText || buttonText || "Know More"}
            </button>
            : null
          }
        </div>
      </div>
    </div >
  )
}

export default ThemeCard
