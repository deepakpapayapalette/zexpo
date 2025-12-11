
import React from 'react'
import { Link } from 'react-router-dom'

const RegularOdd = ({ data = [] || null }) => {
  return (
    <>
      <div className='space-top container'>
        {data?.title ? <h2 className='mb-8 text-2xl lg:text-5xl text-webprimary'>{data?.title || null}</h2> : null}
        <div className='flex md:flex-row flex-col lg:gap-8 gap-6'>
          <div className='w-full md:w-2/5 '>
            <img src={data?.img || null} alt={data?.title || 'image'} className='w-full' />
          </div>
          <div className='flex items-center md:w-3/5'>
            <div className='space-y-4'>
              <h2 className='text-2xl lg:text-4xl text-webprimary'>{data?.subTitle || null}</h2>
              {data.paraContent.map((item, index) => (
                <p className=' text-para md:text-lg' key={item.id || index}>
                  {item?.para || "description"}
                </p>
              ))}

              {data?.btnText ?
                <Link to={data?.btnLink || "#"} className='flex items-center gap-2 text-webprimary'>
                  <button className='theme-btn-fill '>
                    {data?.btnText || "Know More"}
                  </button>
                </Link>
                : null}
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default RegularOdd

