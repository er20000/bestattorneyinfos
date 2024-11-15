import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Mail, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8" />
              <span className="font-bold text-xl">BestAttorneyInfos</span>
            </div>
            <p className="text-gray-400">
              Your trusted source for legal information and education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/articles" className="text-gray-400 hover:text-white">Articles</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal Topics</h3>
            <ul className="space-y-2">
              <li><Link to="/categories/civil-law" className="text-gray-400 hover:text-white">Civil Law</Link></li>
              <li><Link to="/categories/criminal-law" className="text-gray-400 hover:text-white">Criminal Law</Link></li>
              <li><Link to="/categories/family-law" className="text-gray-400 hover:text-white">Family Law</Link></li>
              <li><Link to="/categories/business-law" className="text-gray-400 hover:text-white">Business Law</Link></li>
            </ul>
          </div>

          {/* Legal Resources */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.findlaw.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white flex items-center"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    FindLaw
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.law.cornell.edu" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white flex items-center"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Cornell LII
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.justia.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white flex items-center"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Justia
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-300 mb-2">Government Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.usa.gov" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    USA.gov
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.uscourts.gov" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    U.S. Courts
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.justice.gov" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Department of Justice
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-300 mb-2">Legal Aid</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.lsc.gov" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Legal Services Corporation
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.americanbar.org" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    American Bar Association
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.probono.net" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Pro Bono Net
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-gray-400" />
              <span className="text-gray-400">info@bestattorneyinfos.com</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BestAttorneyInfos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;