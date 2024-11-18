import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, FileText } from 'lucide-react';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    {
      id: 1,
      title: 'Truck Collision Attorney',
      category: 'Vehicle Accidents',
      excerpt: 'Expert guidance on legal rights and procedures following truck collision incidents.',
      path: '/articles/truck-collision'
    },
    {
      id: 2,
      title: 'Oil Rig Injury Lawyer',
      category: 'Workplace Injuries',
      excerpt: 'Understanding your rights and compensation options for oil rig workplace injuries.',
      path: '/articles/oil-rig-injury'
    },
    {
      id: 3,
      title: 'Construction Accident Lawyer',
      category: 'Workplace Safety',
      excerpt: 'Legal information about construction site accidents and worker protection.',
      path: '/articles/construction-accident'
    },
    {
      id: 4,
      title: 'Accident Attorney Fresno',
      category: 'Local Legal Resources',
      excerpt: 'Information about accident claims and legal procedures in the Fresno area.',
      path: '/articles/accident-attorney-fresno'
    },
    {
      id: 5,
      title: 'Truck Accident Attorney',
      category: 'Vehicle Accidents',
      excerpt: 'Comprehensive guide to legal rights and procedures in truck accident cases.',
      path: '/articles/truck-accident'
    },
    {
      id: 6,
      title: 'Pedestrian Accident Attorney',
      category: 'Personal Injury',
      excerpt: 'Understanding pedestrian rights and legal options after an accident.',
      path: '/articles/pedestrian-accident'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  // Focus search input on page load
  useEffect(() => {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.focus();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Search Legal Articles - BestAttorneyInfos</title>
        <meta name="description" content="Search our comprehensive database of legal articles, guides, and resources." />
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-indigo-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Search Legal Resources</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Find the legal information you need from our comprehensive database.
            </p>
          </div>
        </div>

        {/* Search Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Search Input */}
            <div className="relative">
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for articles, topics, or keywords..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Search Results */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4">
                {searchQuery ? `Search Results (${filteredArticles.length})` : 'All Articles'}
              </h2>
              
              {filteredArticles.length > 0 ? (
                <div className="space-y-6">
                  {filteredArticles.map((article) => (
                    <div key={article.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-2 mb-2">
                        <FileText className="h-4 w-4 text-indigo-600" />
                        <span className="text-sm font-medium text-indigo-600">{article.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <Link
                        to={article.path}
                        className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center"
                      >
                        Read More <span className="ml-1">→</span>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600">No articles found matching your search criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;