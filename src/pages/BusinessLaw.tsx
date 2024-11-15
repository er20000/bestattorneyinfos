import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Building, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessLaw = () => {
  return (
    <>
      <Helmet>
        <title>Business Law Guide - BestAttorneyInfos</title>
        <meta name="description" content="Understanding business law fundamentals, including contracts, corporations, and commercial transactions." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/categories" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Categories
          </Link>

          {/* Rest of the component remains the same */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=80"
              alt="Business Law"
              className="w-full h-96 object-cover"
            />
            
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Building className="h-8 w-8 text-indigo-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">Business Law</h1>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  Business law governs commercial transactions, business relationships, and corporate structures. It provides the legal framework for conducting business operations while protecting the interests of various stakeholders.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Core Business Law Areas</h2>
                <ul className="space-y-4 text-gray-600">
                  <li>
                    <strong>Business Formation:</strong> Types of business entities, incorporation, and organizational structure.
                  </li>
                  <li>
                    <strong>Contract Law:</strong> Formation, performance, and enforcement of business agreements.
                  </li>
                  <li>
                    <strong>Employment Law:</strong> Workplace regulations, employee rights, and labor relations.
                  </li>
                  <li>
                    <strong>Intellectual Property:</strong> Patents, trademarks, copyrights, and trade secrets.
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Business Operations</h2>
                <ol className="space-y-4 text-gray-600">
                  <li>1. Corporate Governance: Management structure and shareholder rights.</li>
                  <li>2. Regulatory Compliance: Industry-specific regulations and reporting requirements.</li>
                  <li>3. Business Transactions: Mergers, acquisitions, and commercial contracts.</li>
                  <li>4. Dispute Resolution: Litigation, arbitration, and mediation.</li>
                </ol>

                <div className="bg-indigo-50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold mb-4">Key Legal Documents</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Articles of incorporation</li>
                    <li>• Operating agreements</li>
                    <li>• Employment contracts</li>
                    <li>• Non-disclosure agreements</li>
                    <li>• Purchase and sale agreements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessLaw;