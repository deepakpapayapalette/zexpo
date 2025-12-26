import React from 'react';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ThemeButton from './ThemeButton';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { toggleWish } from '../../store/wishSlice';

const ProductCard = ({ item = [] }) => {
  const dispatch = useDispatch();

  // Check if item is in wishlist
  const isInWishlist = useSelector((state) =>
    state.wish.items.some((wishItem) => wishItem.id === item.id)
  );

  const addItemToCart = (e) => {
    e.preventDefault(); // Prevent navigation if wrapped in a link
    dispatch(addToCart(item));
    console.log('Added to cart:', item.title);
  };

  const addItemToWish = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleWish(item));
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-3 border border-gray-100 max-w-sm">
      <div className="relative h-48 w-full bg-gray-100 rounded-md overflow-hidden mb-3 group">
        <img
          src={item?.image}
          alt={item?.productName}
          className="w-full h-full object-cover mix-blend-multiply"
        />
        <button
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 transform hover:scale-110 ${
            isInWishlist
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-white/80 hover:bg-white text-gray-700 hover:text-red-500'
          }`}
          onClick={addItemToWish}
          title={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {isInWishlist ? <FaHeart /> : <FaRegHeart />}
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
