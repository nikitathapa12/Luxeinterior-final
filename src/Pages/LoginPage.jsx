import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from '../context/auth';

function LoginPage() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!userData.email) errors.email = "Email is required";
    if (!userData.password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:3000/api/auth/login", {
          email: userData.email,
          password: userData.password,
        });

        const { token, userDetails } = response.data;
        setAuth({ user: userDetails, token });
        localStorage.setItem("token", token);
        localStorage.setItem("role", userDetails.role);

        toast.success("Login successful");

        
        navigate("/");
        
      } catch (error) {
        console.error("Login error:", error.response?.data?.msg || error.message);
        toast.error(error.response?.data?.msg || "Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200" data-aos="fade-up">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mt-24" style={{ backdropFilter: 'blur(10px)' }}>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">LuxeInterior</h2>
        <p className="text-center text-gray-500 mb-6">Sign in to access exclusive features</p>
        <form onSubmit={handleSubmit}>
          <ToastContainer />
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
              required
              value={userData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
              required
              value={userData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-700">Don't have an account? <Link to='/register' className="text-gray-800 hover:underline">Register</Link></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
