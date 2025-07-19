import React from 'react';
import { useNavigate } from 'react-router-dom';

const Itsm = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <span className="text-3xl font-semibold text-gray-700">
        Coming Soon 🙏
      </span>
      <button
        className="mt-6 px-4 py-2 cursor-pointer bg-[#4dbf88] text-white rounded hover:bg-[#4dbf88]/80 transition-all"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default Itsm;
