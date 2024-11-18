import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FamilyLaw = () => {
  return (
    <>
      <Helmet>
        <title>Family Law Guide - BestAttorneyInfos</title>
        <meta name="description" content="Understanding family law including marriage, divorce, child custody, and adoption processes." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/categories" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Categories
          </Link>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80"
              alt="Family Law"
              className="w-full h-96 object-cover"
            />
            
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-indigo-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">Family Law</h1>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  Family law focuses on legal matters involving family relationships, including marriage, divorce, child custody, adoption, and other domestic relations issues. It aims to protect the rights and interests of all family members while promoting fair resolutions to domestic disputes.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Key Areas of Family Law</h2>
                <ul className="space-y-4 text-gray-600">
                  <li>
                    <strong>Marriage and Divorce:</strong> Legal requirements for marriage, divorce procedures, and property division.
                  </li>
                  <li>
                    <strong>Child Custody and Support:</strong> Determining custody arrangements and financial obligations for children.
                  </li>
                  <li>
                    <strong>Adoption:</strong> Legal process of establishing parent-child relationships.
                  </li>
                  <li>
                    <strong>Domestic Violence:</strong> Protection orders and legal remedies for abuse victims.
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Common Family Law Procedures</h2>
                <ol className="space-y-4 text-gray-600">
                  <li>1. Filing Petitions: Initiating legal proceedings for divorce, custody, or adoption.</li>
                  <li>2. Mediation: Alternative dispute resolution for family conflicts.</li>
                  <li>3. Court Hearings: Presenting evidence and arguments before a family court judge.</li>
                  <li>4. Order Enforcement: Ensuring compliance with court-ordered arrangements.</li>
                </ol>

                <div className="bg-indigo-50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold mb-4">Important Considerations</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Best interests of the child standard</li>
                    <li>• Property division principles</li>
                    <li>• Modification of orders</li>
                    <li>• Interstate custody issues</li>
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

export default FamilyLaw;