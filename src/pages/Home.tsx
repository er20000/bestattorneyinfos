import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, Scale, Users, Building } from 'lucide-react';
import AdSense from '../components/AdSense';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>BestAttorneyInfos - Your Trusted Legal Information Resource</title>
        <meta name="description" content="Access comprehensive legal information, articles, and resources to help you understand your legal rights and responsibilities." />
        <meta name="google-site-verification" content="JHaIuoISv04OVr-AJb7IBwvuLr8USnEwfJIXZHEusVY" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2167974491932411" crossOrigin="anonymous"></script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Understanding Law Made Simple
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your trusted source for clear, accurate, and up-to-date legal information.
              Empowering you with knowledge to make informed decisions.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/categories"
                className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Browse Categories
              </Link>
              <Link
                to="/articles"
                className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition duration-300"
              >
                Latest Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdSense
          client="ca-pub-2167974491932411"
          slot="5831157283"
          format="auto"
          responsive={true}
          style={{ display: 'block', textAlign: 'center' }}
        />
      </div>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Legal Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <Scale className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Civil Law</h3>
              <p className="text-gray-600 mb-4">Understanding your rights in civil disputes and litigation.</p>
              <Link to="/categories/civil-law" className="text-indigo-600 hover:text-indigo-800">Learn More →</Link>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Criminal Law</h3>
              <p className="text-gray-600 mb-4">Essential information about criminal justice and defense.</p>
              <Link to="/categories/criminal-law" className="text-indigo-600 hover:text-indigo-800">Learn More →</Link>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <Users className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Family Law</h3>
              <p className="text-gray-600 mb-4">Guidance on family matters and domestic relations.</p>
              <Link to="/categories/family-law" className="text-indigo-600 hover:text-indigo-800">Learn More →</Link>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <Building className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Business Law</h3>
              <p className="text-gray-600 mb-4">Legal aspects of running and protecting your business.</p>
              <Link to="/categories/business-law" className="text-indigo-600 hover:text-indigo-800">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdSense
          client="ca-pub-2167974491932411"
          slot="5831157283"
          format="auto"
          responsive={true}
          style={{ display: 'block', textAlign: 'center' }}
        />
      </div>

      {/* Featured Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <Link to="/articles" className="text-indigo-600 hover:text-indigo-800 font-medium">
              View All Articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&w=800&q=80"
                alt="Truck Collision Attorney"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Truck Collision Attorney</h3>
                <p className="text-gray-600 mb-4">
                  Expert guidance on legal rights and procedures following truck collision incidents.
                </p>
                <Link to="/articles/truck-collision" className="text-indigo-600 hover:text-indigo-800">Read More →</Link>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=800&q=80"
                alt="Oil Rig Injury Lawyer"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Oil Rig Injury Lawyer</h3>
                <p className="text-gray-600 mb-4">
                  Understanding your rights and compensation options for oil rig workplace injuries.
                </p>
                <Link to="/articles/oil-rig-injury" className="text-indigo-600 hover:text-indigo-800">Read More →</Link>
              </div>
            </article>
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Construction Accident Lawyer"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Construction Accident Lawyer</h3>
                <p className="text-gray-600 mb-4">
                  Legal information about construction site accidents and worker protection.
                </p>
                <Link to="/articles/construction-accident" className="text-indigo-600 hover:text-indigo-800">Read More →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* AdSense Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdSense
          client="ca-pub-2167974491932411"
          slot="5831157283"
          format="auto"
          responsive={true}
          style={{ display: 'block', textAlign: 'center' }}
        />
      </div>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter for the latest legal updates and insights.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-lg text-gray-900"
            />
            <button
              type="submit"
              className="bg-white text-indigo-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;