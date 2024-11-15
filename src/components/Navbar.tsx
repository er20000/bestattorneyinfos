import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Scale } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search');
    setIsOpen(false);
  };

  return (
    <nav className="bg-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8" />
              <span className="font-bold text-xl">BestAttorneyInfos</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="hover:bg-indigo-600 px-3 py-2 rounded-md">Home</Link>
              <Link to="/categories" className="hover:bg-indigo-600 px-3 py-2 rounded-md">Categories</Link>
              <Link to="/articles" className="hover:bg-indigo-600 px-3 py-2 rounded-md">Articles</Link>
              <Link to="/about" className="hover:bg-indigo-600 px-3 py-2 rounded-md">About</Link>
              <Link to="/contact" className="hover:bg-indigo-600 px-3 py-2 rounded-md">Contact</Link>
              <button 
                onClick={handleSearchClick}
                className="hover:bg-indigo-600 p-2 rounded-md flex items-center space-x-1"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={handleSearchClick}
              className="p-2 rounded-md hover:bg-indigo-600"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-indigo-600"
              aria-label="Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block hover:bg-indigo-600 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/categories"
              className="block hover:bg-indigo-600 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Categories
            </Link>
            <Link
              to="/articles"
              className="block hover:bg-indigo-600 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Articles
            </Link>
            <Link
              to="/about"
              className="block hover:bg-indigo-600 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block hover:bg-indigo-600 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;