
import React from 'react';

const SideBar = () => {
  return (
    <div className="h-screen w-40 bg-gray-900 fixed top-0 left-0 z-10">
      <div className="h-14 w-full bg-gray-800 flex items-center justify-center">
        <div className="h-10 w-10 bg-gray-900 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      <div className="h-full w-full bg-gray-800 flex flex-col items-center">
        {/* Links Here */}
      </div>
    </div>
    );
};

export default SideBar;