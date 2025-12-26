import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromWish,
  toggleWish,
  clearWish,
} from '../../store/wishSlice';
import { addToCart } from '../../store/cartSlice';
import { FaHeart, FaTrash, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ThemeButton from '../../components/UI/ThemeButton';

const WishListPage = () => {
  const wishListItems = useSelector((state) => state.wish.items);
  const totalItems = useSelector((state) => state.wish.totalItems);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromWish(id));
  };

  const handleClearWishlist = () => {
    if (window.confirm('Are you sure you want to clear your entire wishlist?')) {
      dispatch(clearWish());
    }
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    // Optionally show a toast notification
    console.log('Added to cart:', item.title);
  };

  const handleMoveAllToCart = () => {
    wishListItems.forEach((item) => {
      dispatch(addToCart(item));
    });
    dispatch(clearWish());
    console.log('All items moved to cart');
  };

  // Empty State
  if (wishListItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <FaHeart className="text-gray-200 text-9xl" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Wishlist is Empty</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Save items you love by clicking the heart icon. Your wishlist is waiting to be filled with amazing products!
        </p>
        <Link to="/products" className="bg-webprimary text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
          <FaArrowLeft /> Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 font-serif flex items-center gap-2">
              <FaHeart className="text-red-500" />
              My Wishlist
            </h1>
            <p className="text-gray-500 mt-1">{totalItems} {totalItems === 1 ? 'item' : 'items'} saved</p>
          </div>

          <div className="flex gap-3">
            {wishListItems.length > 0 && (
              <>
                <button
                  onClick={handleMoveAllToCart}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center gap-2"
                >
                  <FaShoppingCart /> Move All to Cart
                </button>
                <button
                  onClick={handleClearWishlist}
                  className="px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-colors flex items-center gap-2"
                >
                  <FaTrash /> Clear Wishlist
                </button>
              </>
            )}
          </div>
        </div>

        {/* Wishlist Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishListItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-56 bg-gray-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                />

                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                  title="Remove from wishlist"
                >
                  <FaTrash size={14} />
                </button>

                {/* Added Date Badge */}
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                  Added {new Date(item.addedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-1">
                    {item.title}
                  </h3>
                  {item.company && (
                    <p className="text-sm text-gray-500">{item.company}</p>
                  )}
                  {item.boothNumber && (
                    <p className="text-xs text-gray-400">Booth: {item.boothNumber}</p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-webprimary">
                    {item.price}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="flex-1 bg-webprimary text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <FaShoppingCart size={14} />
                    Add to Cart
                  </button>
                  <Link
                    to={`/product/${item.id}`}
                    className="px-4 py-2.5 border-2 border-webprimary text-webprimary rounded-lg font-medium hover:bg-webprimary hover:text-white transition-colors text-sm"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-webprimary font-medium hover:text-blue-700 transition-colors"
          >
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishListPage;
