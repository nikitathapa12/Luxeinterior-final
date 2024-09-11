import React, { useEffect, useState } from "react";
import axiosInstance from "../../Config/axiosConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    price: "",
    description: "",
    productImage: "",
    countInStock: "",
  });

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get("/api/category/all");
      setCategories(response.data.categories || []); // Ensure categories is always an array

      if (response.data.categories && response.data.categories.length > 0) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          category: response.data.categories[0]._id,
        }));
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get("/api/products/");
      console.log("API Response:", response); // Log the entire response object
      console.log("Fetched Products Data:", response.data); // Log the data directly
  
      // Assuming response.data contains the array of products directly
      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        console.error("Unexpected data format:", response.data);
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products.");
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      productImage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("category", formData.category);
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("productImage", formData.productImage);
    data.append("countInStock", formData.countInStock);

    try {
      if (editingProduct) {
        const response = await axiosInstance.patch(`/api/products/update/${editingProduct._id}`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success(response.data.msg);
        setEditingProduct(null);
      } else {
        const response = await axiosInstance.post("/api/products/create", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success(response.data.msg);
      }

      setFormData({
        category: "",
        name: "",
        price: "",
        description: "",
        productImage: "",
        countInStock: "",
      });
      fetchProducts(); // Refresh product list
    } catch (error) {
      console.error("Error adding/updating product:", error);
      toast.error(error.response?.data?.msg || "An error occurred");
    }
  };

  const handleEdit = (product) => {
    setFormData({
      category: product.category,
      name: product.name,
      price: product.price,
      description: product.description,
      productImage: "", // Reset productImage for edit
      countInStock: product.countInStock,
    });
    setEditingProduct(product);
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await axiosInstance.delete(`/api/products/delete/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        },
      });
      toast.success(response.data.msg);
      fetchProducts(); // Refresh product list
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error(error.response?.data?.msg || "An error occurred");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-lg m-8">
      <form onSubmit={handleSubmit}>
        <ToastContainer />
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            {categories.length > 0 ? (
              categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))
            ) : (
              <option value="">No categories available</option>
            )}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Product Image:</label>
          <input
            type="file"
            name="productImage"
            onChange={handleFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Count in Stock:</label>
          <input
            type="number"
            name="countInStock"
            value={formData.countInStock}
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-950 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {editingProduct ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>

      <h2 className="text-xl font-bold mt-8">Product List</h2>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product._id} className="flex justify-between items-center mt-4 p-4 border rounded">
              <span>{product.name} - ${product.price}</span>
              <div>
                <button onClick={() => handleEdit(product)} className="text-blue-500 mr-2">
                  <AiFillEdit />
                </button>
                <button onClick={() => handleDelete(product._id)} className="text-red-500">
                  <AiFillDelete />
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </ul>
    </div>
  );
};

export default AddProduct;
