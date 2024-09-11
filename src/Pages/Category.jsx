// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import ProductList from './ProductList'; // Ensure this path is correct
// import Sidebar from './Sidebar'; // Ensure this path is correct

// const CategoryPage = () => {
//   const { categoryId } = useParams(); // Extract category from URL params
//   const [products, setProducts] = useState([]);
//   const [sort, setSort] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get('/api/products', {
//           params: { category: categoryId, sort }
//         });
//         setProducts(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch products');
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [categoryId, sort]);

//   const handleSortChange = (sortValue) => {
//     setSort(sortValue);
//   };

//   return (
//     <div className="flex">
//       <Sidebar onSortChange={handleSortChange} />

//       <div className="flex-1 p-4">
//         <h1 className="text-2xl font-bold mb-4">Category: {categoryId}</h1>

//         {loading && <p className="text-gray-500">Loading...</p>}
//         {error && <p className="text-red-500">{error}</p>}

//         <ProductList products={products} />
//       </div>
//     </div>
//   );
// }

// export default CategoryPage;
