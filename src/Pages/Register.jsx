import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!userData.username) errors.username = "Username is required";
    if (!userData.email) errors.email = "Email is required";
    if (!userData.password) errors.password = "Password is required";
    if (!userData.confirmPassword)
      errors.confirmPassword = "Confirm Password is required";
    if (userData.password !== userData.confirmPassword)
      errors.confirmPassword = "Passwords must match";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const validationErrors = validate(); 
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/register",
          {
            name: userData.username,
            email: userData.email,
            password: userData.password,
          }
        );
        console.log(response);
        toast.success("Registration successful");

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } catch (error) {
        console.error(error.response.data.msg);
        toast.error(error.response.data.msg);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-16 flex items-center justify-center bg-gray-200" data-aos="fade-up">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mt-24" style={{ backdropFilter: 'blur(10px)' }}>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">LuxeInterior</h2>
        <p className="text-center text-gray-500 mb-6">Create your account</p>
        <form onSubmit={handleSubmit}>
          <ToastContainer />
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
              value={userData.username}
              onChange={handleChange}
            />
            {errors.username && <div className="text-red-500 text-sm mt-1">{errors.username}</div>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
              value={userData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
              value={userData.password}
              onChange={handleChange}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-8" onClick={togglePasswordVisibility}>
              {showPassword ? (
                <FaEyeSlash className="text-gray-500 cursor-pointer" />
              ) : (
                <FaEye className="text-gray-500 cursor-pointer" />
              )}
            </div>
            {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
              value={userData.confirmPassword}
              onChange={handleChange}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-8" onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? (
                <FaEyeSlash className="text-gray-500 cursor-pointer" />
              ) : (
                <FaEye className="text-gray-500 cursor-pointer" />
              )}
            </div>
            {errors.confirmPassword && <div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div>}
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Register
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-gray-700">Already have an account? <Link to='/login' className="text-gray-800 hover:underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
