import React from 'react'
import { FaRobot, FaChartLine, FaGlobeAmericas, FaUsers } from 'react-icons/fa';
import { SiFuturelearn } from 'react-icons/si';
import { GiGrowth } from 'react-icons/gi';
import { MdHealthAndSafety } from 'react-icons/md';
const benefitCardsReactIcons = [
  {
    id: 1,
    title: "Innovative Projects",
    description: "Work on AI-powered, future-ready solutions",
    icon: FaRobot,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    id: 2,
    title: "Growth Opportunities",
    description: "Learn, lead, and shape your career",
    icon: GiGrowth,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    id: 3,
    title: "Global Impact",
    description: "Your work improves healthcare, safety, and communities",
    icon: FaGlobeAmericas,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    id: 4,
    title: "Collaborative Culture",
    description: "Work on AI-powered, future-ready solutions",
    icon: FaUsers,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }
];
const WorkWithAeturn = () => {
  return (
    <>
      <div className="container space-top">
        <h2 className='md:text-3xl text-2xl mb-4 text-webprimary font-semibold'>Why Work with  AETURN?</h2>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:gap-8 gap-6'>
          {benefitCardsReactIcons.map((item, index) => (
            <div
              key={item?.id || index}
              className="domain-card bg-white text-gray-800 rounded-xl p-6 shadow-md flex flex-col justify-between border border-gray-300 hover:shadow-lg transition-shadow duration-300"
            >
              <div className='text-center flex flex-col items-center justify-center gap-2'>
                <div className='rounded-full border border-webpirimary w-14 h-14 pt-2 flex items-center justify-center '>

                  <item.icon className="w-8 h-8 mx-auto mb-2 text-webprimary" key={item?.icon || null} />
                </div>
                <h3 className="md:text-xl font-semibold text-webprimary mb-2">
                  {item?.title}
                </h3>
                <p className="text-md mb-4">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default WorkWithAeturn

