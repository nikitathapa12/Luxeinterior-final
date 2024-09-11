

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowLeftSLine } from 'react-icons/ri';
import ButtonComponent from '../Component/ButtonComponent/ButtonComponent';
import { useCart } from '../context/Cart';
import { ToastContainer, toast } from 'react-toastify';


const DetailedProductView = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const incrementQuantity = () => {
    if (quantity < product.countInStock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBackClick = () => {
    navigate('/shop');
  };
  
  const [cart, setCart]=useCart();

  return (

  <>
    <ToastContainer/>
  
    <div className="fixed inset-0 bg-white">
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="absolute top-2 left-2 text-gray-500 hover:text-gray-700 text-2xl font-bold flex items-center"
        style={{ zIndex: 50, backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}
      >
        <RiArrowLeftSLine className="mr-1" /> Back
      </button>

      <div className="flex flex-col md:flex-row p-10">
        {/* Product Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={product.productImage}
            alt={product.name}
            className="rounded-lg h-auto max-w-full md:max-w-sm"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 p-6 md:p-10">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">${product.price}</p>
          <p className={`text-lg mb-4 ${product.countInStock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
          </p>
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={decrementQuantity}
              className="px-4 py-2 bg-gray-300 text-black rounded"
              disabled={quantity === 1}
            >
              &minus;
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="px-4 py-2 bg-gray-300 text-black rounded"
              disabled={quantity === product.countInStock}
            >
              +
            </button>
          </div>
          <ButtonComponent text="Add to Cart" 
            onClick={() => {
                    console.log('Button Clicked');
                    setCart([...cart, product]);
                    localStorage.setItem('cart', JSON.stringify([...cart, product]))
                    toast.success('Item Added to Cart');
                }}
          />
        </div>
      </div>
    </div>
  </>
  );
};

export default DetailedProductView;
