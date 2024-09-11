// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../context/Cart';

// const CheckoutPage = () => {
//     const [cart, setCart] = useCart();
//     const [orderPlaced, setOrderPlaced] = useState(false);
//     const navigate = useNavigate();

//     const handlePlaceOrder = () => {
//         // Process the order with COD
//         setOrderPlaced(true);

//         // Clear the cart after placing the order
//         setCart([]);
//         localStorage.removeItem('cart');
//     };

//     return (
//         <div className='pt-[100px] text-center'>
//             {orderPlaced ? (
//                 <div className="text-green-600 font-bold text-2xl mt-5">
//                     Your order has been successfully placed!
//                 </div>
//             ) : (
//                 <div className="bg-white p-8 rounded shadow-md w-[400px] mx-auto">
//                     <h2 className="text-lg font-bold mb-4">Confirm Your Order</h2>
//                     <p className="mb-6">You have chosen to pay by Cash on Delivery.</p>
//                     <button
//                         onClick={handlePlaceOrder}
//                         className="w-full bg-blue-950 text-white py-2 px-4 rounded"
//                     >
//                         Place Order
//                     </button>
//                 </div>
//             )}
//             {orderPlaced && (
//                 <button
//                     onClick={() => navigate('/shop')}
//                     className="mt-4 bg-gray-700 text-white py-2 px-4 rounded"
//                 >
//                     Continue Shopping
//                 </button>
//             )}
//         </div>
//     );
// };

// export default CheckoutPage;
