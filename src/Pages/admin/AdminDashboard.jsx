import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { FaSignOutAlt, FaListAlt, FaBoxOpen, FaEnvelope } from 'react-icons/fa';
import AddCategory from './AddCategory';
import { toast } from 'react-toastify';
import AddProduct from './AddProduct';
import Messages from './Messages'; // Import the Messages component

const AdminDashboard = () => {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showMessages, setShowMessages] = useState(false); // State for Messages

  const handleCategoryClick = () => {
    setShowAddCategory(!showAddCategory);
    setShowAddProduct(false);
    setShowMessages(false); // Hide Messages if it's visible
  };

  const handleProductClick = () => {
    setShowAddProduct(!showAddProduct);
    setShowAddCategory(false);
    setShowMessages(false); // Hide Messages if it's visible
  };

  const handleMessagesClick = () => {
    setShowMessages(!showMessages);
    setShowAddCategory(false);
    setShowAddProduct(false); // Hide AddCategory/AddProduct if they're visible
  };

  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ''
    });
    localStorage.removeItem('auth');
    toast.success('Logout successful');
    setTimeout(() => {
      navigate('/profile');
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-xl">
        <div className="p-6 text-2xl font-bold text-center border-b border-gray-700">
          LuxeInterior Admin
        </div>
        <nav className="mt-8">
          <ul>
            <li className="px-6 py-3 hover:bg-gray-700 flex items-center gap-3 cursor-pointer">
              <FaListAlt />
              <button onClick={handleCategoryClick} className="w-full text-left">
                Categories
              </button>
            </li>
            <li className="px-6 py-3 hover:bg-gray-700 flex items-center gap-3 cursor-pointer">
              <FaBoxOpen />
              <button onClick={handleProductClick} className="w-full text-left">
                Products
              </button>
            </li>
            <li className="px-6 py-3 hover:bg-gray-700 flex items-center gap-3 cursor-pointer">
              <FaEnvelope />
              <button onClick={handleMessagesClick} className="w-full text-left">
                Messages
              </button>
            </li>
            <li className="px-6 py-3 hover:bg-red-600 flex items-center gap-3 cursor-pointer">
              <FaSignOutAlt />
              <button onClick={handleLogout} className="w-full text-left">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-10 bg-white shadow-lg rounded-lg m-6">
        {showAddCategory && <AddCategory />}
        {showAddProduct && <AddProduct />}
        {showMessages && <Messages />} {/* Render Messages component */}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
