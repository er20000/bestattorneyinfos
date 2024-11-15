import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, Scale, Users, Building } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: 'Civil Law',
      category: 'Civil Law',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
      excerpt: 'A comprehensive guide to understanding the fundamentals of civil law and its impact on everyday life.',
      icon: Scale,
      path: '/categories/civil-law'
    },
    {
      id: 2,
      title: 'Criminal Law',
      category: 'Criminal Law',
      image: 'https://images.unsplash.com/photo-1453945619913-79ec89a82c51?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Essential information about criminal law processes and rights every citizen should know.',
      icon: BookOpen,
      path: '/categories/criminal-law'
    },
    {
      id: 3,
      title: 'Family Law',
      category: 'Family Law',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Navigate family law matters with our comprehensive guide to rights and responsibilities.',
      icon: Users,
      path: '/categories/family-law'
    },
    {
      id: 4,
      title: 'Business Law',
      category: 'Business Law',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Understanding the legal aspects of running a business and protecting your interests.',
      icon: Building,
      path: '/categories/business-law'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Legal Categories - BestAttorneyInfos</title>
        <meta name="description" content="Browse our collection of informative legal categories covering various aspects of law including civil, criminal, family, and business law." />
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-indigo-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center">Legal Categories</h1>
            <p className="mt-4 text-xl text-center max-w-3xl mx-auto">
              Explore our comprehensive collection of legal categories and resources
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <article key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Icon className="h-5 w-5 text-indigo-600" />
                      <span className="text-sm font-medium text-indigo-600">{category.category}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                    <p className="text-gray-600 mb-4">{category.excerpt}</p>
                    <Link to={category.path} className="text-indigo-600 hover:text-indigo-800 font-medium">
                      Read More →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;