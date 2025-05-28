import React from 'react';

const Header = () => {
  return (
    <header className=" top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl text-indigo-600" style={{ fontFamily: 'Pacifico' }}>
            FolioForge
          </a>

          <nav className="flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 text-sm font-medium"
            >
              About
            </a>
            {/* <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 text-sm font-medium"
            >
              Features
            </a> */}
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 text-sm font-medium"
            >
              Templates
            </a>
            {/* <a
              href="#"
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-600/90 transition-all duration-300 text-sm font-medium whitespace-nowrap"
            >
              Sign In
            </a> */}
          </nav>

          <button className="md:hidden flex items-center justify-center w-10 h-10 text-gray-700">
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;