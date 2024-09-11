
import React from 'react';

const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md m-4">
      <h3 className="text-gray-700 text-lg">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatsCard;
