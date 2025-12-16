import React, { useState } from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import ProductCard from '../components/UI/ProductCard';
import { productCards } from '../data/LocalData';
import { useParams } from 'react-router-dom';
import productImage from '../assets/images/product/product1.png'
const ProductDetails = () => {
  const { id } = useParams();
  const data = productCards.find((item) => item.id === parseInt(id));
  console.log(data)
  const [mainImage, setMainImage] = useState(0);

  const productImages = [
    productImage, productImage, productImage, productImage, productImage
  ];

  const recommendedProducts = [
    {
      image: "https://t3.ftcdn.net/jpg/04/55/28/72/360_F_455287239_l5FkZ93a4b6g3b5g3b5g3b5g3b5g3b5.jpg",
      title: "Smart VR",
      company: "ATRN Solutions LLP",
      boothNumber: "102",
      price: "₹15,000/Pics"
    },
    {
      image: "https://t3.ftcdn.net/jpg/04/55/28/72/360_F_455287239_l5FkZ93a4b6g3b5g3b5g3b5g3b5g3b5.jpg",
      title: "Smart VR",
      company: "ATRN Solutions LLP",
      boothNumber: "102",
      price: "₹15,000/Pics"
    },
    {
      image: "https://t3.ftcdn.net/jpg/04/55/28/72/360_F_455287239_l5FkZ93a4b6g3b5g3b5g3b5g3b5g3b5.jpg",
      title: "Smart VR",
      company: "ATRN Solutions LLP",
      boothNumber: "102",
      price: "₹15,000/Pics"
    },
    {
      image: "https://t3.ftcdn.net/jpg/04/55/28/72/360_F_455287239_l5FkZ93a4b6g3b5g3b5g3b5g3b5g3b5.jpg",
      title: "Smart VR",
      company: "ATRN Solutions LLP",
      boothNumber: "102",
      price: "₹15,000/Pics"
    }
  ];

  const benefits = [
    "Immersive Experience",
    "Global Access",
    "Cost-Effective",
    "Interactive Engagement"
  ];



  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        {/* Left Column - Images */}
        <div className="lg:w-1/2">
          <div className="bg-gray-100 rounded-lg p-4 mb-4 relative aspect-square">
            <button className="absolute top-4 left-4 p-2 bg-white/50 rounded-full hover:bg-white text-gray-700">
              <FaHeart />
            </button>
            <img
              src={data?.image}
              alt="Main Product"
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {productImages.map((img, idx) => (
              <div
                key={idx}
                className={`w-20 h-20 flex-shrink-0 bg-gray-100 rounded cursor-pointer border-2 ${mainImage === idx ? 'border-blue-600' : 'border-transparent'}`}
                onClick={() => setMainImage(idx)}
              >
                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="lg:w-1/2 space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 font-serif mb-1">{data?.title}</h1>
            <p className="text-gray-500">{data?.company}</p>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-gray-900">{data?.price}</span>
            <span className="text-gray-400 line-through">{data?.price}</span>
          </div>

          <div className="space-y-1">
            <p className="text-[#0b5ed7] font-bold">64% + Extra 21% OFF</p>
            <p className="text-red-500 text-sm">Hurry Up Last 20 Pieces are left!</p>
          </div>

          <div className="bg-blue-50/50 p-6 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-4">Benefits Of Smart VR</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 text-sm">
              {benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ol>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="bg-[#0b5ed7] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition-colors min-w-[160px]">
              Buy Now
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-black font-bold py-3 px-8 rounded transition-colors flex items-center gap-2">
              Add to Cart
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <h2 className="text-3xl font-bold text-black mb-8 font-serif">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCards.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;

