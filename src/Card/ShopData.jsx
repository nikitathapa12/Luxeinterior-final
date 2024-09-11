import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useCart } from '../context/Cart';
import { ToastContainer, toast } from 'react-toastify';


const ProductComponent = ({ product, onReadMore }) => {
  const [cart, setCart]=useCart();
  return (

   <>
    <ToastContainer/>
    
     
    <div className='mt-8 rounded-[10px] flex flex-col mb-5 items-center justify-between bg-slate-50 text-white h-[28rem] w-[19rem] shadow-lg shadow-gray-500' id='card-image' onClick={onReadMore}>
      <div className='w-full flex items-center justify-center .card-image ' >
        <img src={product.productImage} className='rounded-lg h-[20rem] w-[19rem] mt-[5px]'  alt={product.name} />
      </div>

      <div className='text-center p-2 text-black'>
        <h2 className='text-xl font-bold'>{product.name}</h2>
        <p className='text-lg font-semibold'>${product.price}</p>
      </div>

      <div className='flex justify-center w-full p-1'>
        <button 
          // onClick={onReadMore} 
          onClick={() => {
                    console.log('Button Clicked');
                    setCart([...cart, product]);
                    localStorage.setItem('cart', JSON.stringify([...cart, product]))
                    toast.success('Item Added to Cart');
                }}
          className='h-[35px] w-[130px] bg-blue-950 text-white text-sm flex items-center justify-center gap-3'>
          Add To Cart
          <RiShoppingCartLine className='text-xl' />
        </button>
        <div className='flex items-center'>
          <span>{product.countInStock}</span>
        </div>
      </div>
    </div>
  </>
  );
};

export default ProductComponent;
