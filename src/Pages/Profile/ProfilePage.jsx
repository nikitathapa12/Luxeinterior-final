import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { toast, ToastContainer } from "react-toastify";
import Dashboard from '../User/Dashboard';
import AdminDashboard from '../admin/AdminDashboard'
import { useCart } from '../../context/Cart';



export default function ProfilePage() {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ""
    });


    localStorage.removeItem("auth");
    localStorage.removeItem('cart');
        setCart([]);
    toast.success("Logout successful");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      <ToastContainer />
      <div className="pt-[20vh]">
        <h1></h1>
        
        {/* <button onClick={handleLogout}>Logout</button> */}
      </div>

      {auth.user && auth.user.role === "admin" ? <AdminDashboard /> : <Dashboard />}
      <div className="pt-[20vh]"></div>
    </>
  );
}
  