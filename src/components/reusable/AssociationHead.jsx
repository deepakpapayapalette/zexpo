import React from 'react'
import icon1 from '../../assets/images/associations/icon1.png'


const AssociationHead = ({ data = {} }) => {
  console.log(data, "data")
  return (
    <>

      <section className="space-top">
        <div className="container">
          <div className="bg-white rounded-xl shadow-card  border-b-websecondary overflow-hidden border-b-[6px]  ">
            {/* Top border accent */}
            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Header Section */}
              <div className="flex items-start md:items-center gap-4 flex-col md:flex-row">
                {/* Icon */}
                <div className="text-webprimary text-5xl">
                  <img src={data?.icon1 || icon1 || null} alt="image" />
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-2xl md:text-4xl font-semibold text-webprimary">
                    {data?.title || null}
                  </h3>
                  <p className="text-para  text-sm md:text-base">
                    {data?.subtitle || null}
                  </p>
                </div>
              </div>

              {/* Subheading */}
              <h4 className="text-lg md:text-xl font-semibold text-webprimary mt-6">
                {data?.subheading || null}
              </h4>

              {/* Paragraph */}
              <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
                {data?.description || null}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AssociationHead

