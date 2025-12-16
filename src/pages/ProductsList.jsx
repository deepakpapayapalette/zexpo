import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../components/UI/ProductCard';

const ProductsList = () => {

  const products = useSelector((state) => state.product.items);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-black mb-8 font-serif">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ProductsList

