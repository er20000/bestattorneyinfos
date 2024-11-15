import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Scale, Award, Users, BookOpen, AlertTriangle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Scale,
      title: 'Educational Focus',
      description: 'We provide general legal information for educational purposes only.',
    },
    {
      icon: Award,
      title: 'Quality Content',
      description: 'We strive to maintain high standards in our educational materials.',
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Our mission is to make legal information accessible to everyone.',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Resources',
      description: 'Covering various areas of law with educational guides and articles.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - BestAttorneyInfos</title>
        <meta name="description" content="Learn about our mission to provide accessible legal information for educational purposes. BestAttorneyInfos is an educational resource, not a substitute for legal advice." />
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        {/* Disclaimer Banner */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-3 text-amber-800">
              <AlertTriangle className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">
                <strong>Important Disclaimer:</strong> BestAttorneyInfos is an educational resource only. We do not provide legal advice, and our content is not reviewed by attorneys. Always consult with a qualified legal professional for specific legal matters.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-indigo-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-6">About BestAttorneyInfos</h1>
            <p className="text-xl max-w-3xl mx-auto">
              An educational platform dedicated to making legal information more accessible and understandable.
            </p>
          </div>
        </div>

        {/* Detailed Disclaimer Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white p-6 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Educational Purpose Disclaimer</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                BestAttorneyInfos is strictly an educational resource designed to provide general information about legal topics. We want to be completely transparent about our service:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>We are not a law firm and do not provide legal services</li>
                <li>Our content is not created, reviewed, or endorsed by attorneys</li>
                <li>The information provided is for educational and informational purposes only</li>
                <li>We do not provide legal advice or attorney recommendations</li>
                <li>Our content should not be considered a substitute for professional legal counsel</li>
              </ul>
              <p className="font-medium text-amber-800">
                For specific legal matters, always consult with a qualified attorney who can provide advice based on your individual situation and jurisdiction.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Educational Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in making legal information more accessible and understandable for educational purposes. 
              Our goal is to help people better understand legal concepts while recognizing when professional legal help is needed.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <Icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white py-16 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Educational Focus</h3>
                <p className="text-gray-600">
                  Committed to providing clear, educational content to help understand legal concepts.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
                <p className="text-gray-600">
                  Making legal information understandable while emphasizing when professional help is needed.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Transparency</h3>
                <p className="text-gray-600">
                  Clear about our educational nature and the importance of professional legal counsel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;