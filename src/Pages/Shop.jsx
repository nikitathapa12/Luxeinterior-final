import React, { useState, useEffect } from 'react';
import ProductComponent from '../Card/ShopData';
import FooterComponent from '../Footer/Footer';
import axios from 'axios';
import DetailedProductView from '../Component/DetailedProductView';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // Define searchTerm state here
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromUrl = params.get('category');
    const searchFromUrl = params.get('search'); // Get search term from URL
    setSelectedCategory(categoryFromUrl || '');
    setSearchTerm(searchFromUrl || ''); // Set the search term
  }, [location.search]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/api/products', {
          params: {
            category: selectedCategory,
            search: searchTerm, // Pass search term to API
          },
        });
        setProducts(response.data); 
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory, searchTerm]); // Add searchTerm to the dependencies

  useEffect(() => {
    const filtered = products.filter(product => {
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      const matchesSearchTerm = searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true;
      return matchesCategory && matchesSearchTerm;
    });
    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm]);





  const paginateProducts = () => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  };

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex mt-4 ml-14">
        {/* Sidebar */}
        <div className="w-1/4">
          <Sidebar onFilterChange={setFilteredProducts} />
        </div>

        {/* Products Section */}
        <div className="flex-1 ml-[-180px] mt-[60px] mr-[-30px]">
          <div className='mt-8 flex flex-wrap justify-center gap-6'>
            {loading ? (
              <p>Loading products...</p>
            ) : error ? (
              <p>{error}</p>
            ) : filteredProducts.length === 0 ? (
              <p>No products found</p>
            ) : (
              paginateProducts().map((product, index) => (
                <ProductComponent
                  key={index}
                  product={product}
                  onReadMore={() => setSelectedProduct(product)}
                />
              ))
            )}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-6 mb-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-950 text-white' : 'bg-gray-200'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Product View */}
      {selectedProduct && (
        <DetailedProductView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <FooterComponent />
    </div>
  );
};

export default Shop;
