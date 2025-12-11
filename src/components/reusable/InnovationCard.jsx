import React from 'react'

const InnovationCard = ({ card, index }) => {
  return (
    <div
      key={card?._id || card?.id || index}
      className="domain-card bg-white text-gray-800 rounded-xl p-3 gap-2 shadow-md space-y-2 border border-gray-300 hover:shadow-lg transition-shadow duration-300 "
    >
      {card?.icon ?
        <div className=" rounded-full border border-gray-300 w-14 h-14 flex items-center justify-center ">
          <span className="" style={{ display: 'inline-block' }}>
            <card.icon className={`w-9 h-9 `} style={{ color: card.iconColor }} />
          </span></div>
        : null}
      <h3 className="sm:text-xl font-semibold text-webprimary">{card.title}</h3>
      <p className="text-gray-600">{card.description}</p>
    </div>
  )
}

export default InnovationCard
