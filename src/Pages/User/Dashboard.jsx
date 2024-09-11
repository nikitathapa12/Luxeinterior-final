import React from 'react';
import { useAuth } from '../../context/auth';
import { FaUserCircle, FaEdit, FaSignOutAlt } from 'react-icons/fa';
import ButtonComponent from '../../Component/ButtonComponent/ButtonComponent';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  // Correctly construct the profile image URL
  const profileImageUrl = auth?.user?.profileImage
  ? `http://localhost:4000${auth.user.profileImage.replace(/^\//, '')}` 
  : '/default-profile.png';

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout successful");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const handleEditProfile = () => {
    navigate('/profile/edit');
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 pt-[30vh]">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
            <div className="flex items-center">
              {profileImageUrl ? (
                <img
                  src={profileImageUrl}
                  alt="Profile"
                  className="w-16 h-16 rounded-full mr-4"
                  onError={(e) => { e.target.src = '/default-profile.png'; }}  // Adjust path to default image
                />
              ) : (
                <FaUserCircle className="text-6xl text-gray-500 mr-4" />
              )}
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  Hello, {auth.user ? auth.user.name : ''}
                </h1>
                <p className="text-gray-600">Welcome back to your profile page.</p>
              </div>
            </div>
            <ButtonComponent
              text="Edit Profile"
              icon={<FaEdit />}
              onClick={handleEditProfile}
            />
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-lg w-full max-w-md mb-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Profile Information</h2>
              <p className="text-gray-600">Email: {auth.user ? auth.user.email : 'N/A'}</p>
              {auth.user?.bio && (
                <p className="text-gray-600 mt-2">Bio: {auth.user.bio}</p>
              )}
            </div>

            <ButtonComponent
              text="Logout"
              icon={<FaSignOutAlt />}
              onClick={handleLogout}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
