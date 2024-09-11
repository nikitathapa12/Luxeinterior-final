import luxe from '../assets/luxe.png';
import {  RiSearchLine, RiShoppingCartLine, RiUserLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useAuth } from '../context/auth';
import { useCart } from '../context/Cart';

const NavBar = () => {
  const [cart]=useCart();
  
  const [auth] = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();


  const handleProfileClick = () => {
    if (auth.user) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/shop?search=${searchQuery}`);
    }
  };

  // if (auth.user && auth.user.role === 'admin') {
  //   return null; // Do not render the navbar if the user is an admin
  // }

  return (
    <nav className="h-16 w-full bg-white fixed z-10 flex items-center justify-between px-6 shadow-md" data-aos="fade-down">
      <img className="h-10 w-auto" src={luxe} alt="logo" />

      <ul className="flex gap-10 text-black text-lg">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="flex gap-5 items-center">
        <input
          type="text"
          className="border p-1 rounded-md"
          placeholder="Search Products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
        <RiSearchLine className="absolute right-28 top-2/4 transform -translate-y-2/4 text-gray-400 text-lg cursor-pointer" onClick={() => navigate(`/shop?search=${searchQuery}`)} />
        <Link to='/cart'>
          <RiShoppingCartLine className='text-2xl' />
          {cart?.length > 0 && (
            <span className="absolute top-4 right-16 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
              {cart.length}
            </span>
            )}
        </Link>
        
        <button onClick={handleProfileClick}>
          <RiUserLine className='text-xl' />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
