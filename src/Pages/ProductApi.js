import axios from "axios";

export const getProduct = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/products', {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getProductsByCategory = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/products', {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getSingleProduct = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/products/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};