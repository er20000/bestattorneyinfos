import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: 'Truck Collision Attorney',
      category: 'Vehicle Accidents',
      image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Expert guidance on legal rights and procedures following truck collision incidents.',
      date: '2024-03-15',
      path: '/articles/truck-collision'
    },
    {
      id: 2,
      title: 'Oil Rig Injury Lawyer',
      category: 'Workplace Injuries',
      image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Understanding your rights and compensation options for oil rig workplace injuries.',
      date: '2024-03-14',
      path: '/articles/oil-rig-injury'
    },
    {
      id: 3,
      title: 'Construction Accident Lawyer',
      category: 'Workplace Safety',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Legal information about construction site accidents and worker protection.',
      date: '2024-03-13',
      path: '/articles/construction-accident'
    },
    {
      id: 4,
      title: 'Accident Attorney Fresno',
      category: 'Local Legal Resources',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Information about accident claims and legal procedures in the Fresno area.',
      date: '2024-03-12',
      path: '/articles/accident-attorney-fresno'
    },
    {
      id: 5,
      title: 'Truck Accident Attorney',
      category: 'Vehicle Accidents',
      image: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Comprehensive guide to legal rights and procedures in truck accident cases.',
      date: '2024-03-11',
      path: '/articles/truck-accident'
    },
    {
      id: 6,
      title: 'Pedestrian Accident Attorney',
      category: 'Personal Injury',
      image: 'https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Understanding pedestrian rights and legal options after an accident.',
      date: '2024-03-10',
      path: '/articles/pedestrian-accident'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Legal Articles - BestAttorneyInfos</title>
        <meta name="description" content="Browse our collection of informative legal articles covering various aspects of law including personal injury, workplace accidents, and more." />
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-indigo-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center">Legal Articles</h1>
            <p className="mt-4 text-xl text-center max-w-3xl mx-auto">
              Explore our comprehensive collection of legal articles and resources
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <FileText className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm font-medium text-indigo-600">{article.category}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Link to={article.path} className="text-indigo-600 hover:text-indigo-800 font-medium">
                      Read More →
                    </Link>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;