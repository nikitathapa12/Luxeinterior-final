import React from 'react';
import { useNavigate } from 'react-router-dom';

function FeatureItem({ data }) {
  const navigate = useNavigate();

  const handleItemClick = (category) => {
    navigate(`/shop?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className='mt-8 ml-8 gap-9 flex overflow-hidden flex-row flex-wrap'>
      {data.map((item) => (
        <div
          key={item.id}
          className='card bg-slate-100 h-[345px] w-[380px] rounded-[10px] shadow-lg shadow-gray-300'
          onClick={() => handleItemClick(item.title)}
        >
          <div className='image-container'>
            <img
              src={item.image}
              className='card-image w-[380px] h-[345px]'
              alt={item.title}
            />
            <div className='card-text font-bold'>{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureItem;
