import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../store/cartSlice';
import { FaTrash, FaMinus, FaPlus, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  // Calculate total price dynamically from cart items
  const totalPrice = cartItems.reduce((total, item) => {
    // Use the stored priceValue or totalPrice if available, otherwise 0
    return total + (item.totalPrice || 0);
  }, 0);


  const handleAddItem = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6">
          <FaShoppingCart className="text-gray-200 text-9xl" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">Looks like you haven't added anything to your cart yet. Explore our exhibitions and find products you love.</p>
        <Link to="/" className="bg-[#0b5ed7] text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
          <FaArrowLeft /> Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 font-serif">Shopping Cart ({totalQuantity} items)</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items List */}
        <div className="lg:w-2/3 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-4 items-center">
              {/* Image */}
              <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-contain mix-blend-multiply" />
              </div>

              {/* Details */}
              <div className="flex-grow text-center sm:text-left">
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-1">{item.company}</p>
                <p className="text-[#0b5ed7] font-bold">{item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <FaMinus size={12} />
                </button>
                <span className="font-bold w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => handleAddItem(item)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <FaPlus size={12} />
                </button>
              </div>

              {/* Remove Button (Optional distinct from minus, can remove entire item) */}

            </div>
          ))}

          <button
            onClick={handleClearCart}
            className="text-red-500 font-bold hover:underline mt-4 flex items-center gap-2"
          >
            <FaTrash /> Clear Cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-24">
            <h2 className="text-xl font-bold mb-6 border-b pb-4">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping Estimate</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax Estimate</span>
                <span>₹0</span>
              </div>
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between items-center font-bold text-xl">
                <span>Order Total</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <Link to="/login" className="block w-full bg-[#0b5ed7] text-white text-center py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors shadow-md">
              Proceed to Checkout
            </Link>
            <Link to="/" className="block w-full text-center py-3 mt-3 text-gray-500 hover:text-black font-medium">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
