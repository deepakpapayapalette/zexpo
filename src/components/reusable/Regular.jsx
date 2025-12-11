import React from 'react'
function Regular({ data }) {

  return (
    <div >
      <div className='container space-top'>
        <h2 className='text-webprimary lg:text-5xl text-3xl mb-6 lg:mb-8'>{data?.title || "title"} </h2>
        <div className='flex flex-col lg:flex-row gap-5 lg:gap-10 lg:shadow-card lg:rounded-lg '>
          <div className='w-full rounded-lg overflow-hidden lg:w-[40%]'>
            <img src={data?.img || null} alt={data?.title || 'image'} className='w-full' />
          </div>
          <div className="flex lg:items-center pt-4 text-lg lg:py-5 lg:w-[60%]">
            <div className='space-y-4 lg:pe-5'>
              {data.paraContent.map((item, index) => (
                <p className=' text-para md:text-2xl ' key={item.id}>
                  {item?.para || "description"}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Regular

