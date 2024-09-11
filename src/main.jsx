import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './tailwind.css';
import { AuthProvider } from './context/auth';
import { CartProvider } from './context/Cart.jsx';
// import { CartProvider } from '../context../CartContext';  // Import CartProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AuthProvider>
);
