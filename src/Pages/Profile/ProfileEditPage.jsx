import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import axiosInstance from "../../Config/axiosConfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProfileEditPage() {
  const [auth, setAuth] = useAuth(); // Added setAuth to update the auth context
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axiosInstance.get("/api/profile/", {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        setBio(data.profile.bio);
        setPreviewImage(data.profile.profileImage);
      } catch (error) {
        toast.error("Error fetching profile");
      }
    };
    fetchProfile();
  }, [auth.token]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("bio", bio);
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }

    try {
      const { data } = await axiosInstance.put("/api/profile/update", formData, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Profile updated successfully");

      // Update auth context with the new image and bio
      setAuth({
        ...auth,
        user: {
          ...auth.user,
          bio: data.profile.bio,
          profileImage: data.profile.profileImage,
        },
      });

      setTimeout(() => {
        navigate("/profile");
      }, 1500);
    } catch (error) {
      toast.error("Error updating profile");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
              Bio
            </label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              maxLength={500}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profileImage">
              Profile Image
            </label>
            <input
              type="file"
              id="profileImage"
              onChange={handleImageChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {previewImage && (
            <div className="mb-4">
              <img
                src={previewImage}
                alt="Profile Preview"
                className="w-16 h-16 rounded-full mx-auto"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}
