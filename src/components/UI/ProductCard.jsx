import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ThemeButton from './ThemeButton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const ProductCard = ({ item = [] }) => {
  const dispatch = useDispatch();

  const addItemToCart = (e) => {
    e.preventDefault(); // Prevent navigation if wrapped in a link
    dispatch(addToCart(item));
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-3 border border-gray-100 max-w-sm">
      <div className="relative h-48 w-full bg-gray-100 rounded-md overflow-hidden mb-3 group">
        <img
          src={item?.image}
          alt={item?.productName}
          className="w-full h-full object-cover mix-blend-multiply"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/50 hover:bg-white rounded-full transition-colors text-gray-700 hover:text-red-500">
          <FaHeart />
        </button>
      </div>

      <div className="space-y-1">
        <h3 className="text-xl font-bold text-gray-900 font-serif">{item.title}</h3>
        <p className="text-gray-500 text-sm">{item.company}</p>
        <p className="text-gray-500 text-sm">Booth Number : {item.boothNumber}</p>
        <p className="text-[#0b5ed7] font-bold text-lg mt-1">{item.price}</p>
      </div>

      <div className="flex-col  mt-4">
        <div className='w-full ' onClick={addItemToCart}>
          <ThemeButton className='text-md flex items-center w-full justify-center mb-3'>
            <span>
              Add to Cart
            </span>
            <FaShoppingCart className="ms-2 inline" />
          </ThemeButton>
        </div>
        <Link to={`/product/${item.id}`} className='w-full'>
          <ThemeButton variant="fill" className='w-full'>
            Buy Now
          </ThemeButton>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
