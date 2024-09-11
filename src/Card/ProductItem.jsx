import React from 'react';

const ProductItem = ({ image, name }) => {
  const placeholderImage = 'path/to/placeholder/image.jpg'; // Set a placeholder image path
  return (
    <div className="relative group overflow-hidden border p-4">
      <img src={image || placeholderImage} alt={name} className="w-full h-full object-cover transition-transform transform group-hover:scale-110" />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <h3 className="text-white text-2xl font-semibold">{name}</h3>
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-bold">{name}</p>
      </div>
    </div>
  );
};


export default ProductItem;

