import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Scale, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CivilLaw = () => {
  return (
    <>
      <Helmet>
        <title>Civil Law Guide - BestAttorneyInfos</title>
        <meta name="description" content="Comprehensive guide to understanding civil law, including contracts, property rights, and civil litigation." />
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
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=2000&q=80"
              alt="Civil Law"
              className="w-full h-96 object-cover"
            />
            
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Scale className="h-8 w-8 text-indigo-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">Civil Law</h1>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  Civil law encompasses the body of rules that govern private relationships and disputes between individuals, organizations, and entities. Unlike criminal law, civil law focuses on resolving conflicts and providing remedies rather than punishment.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Key Areas of Civil Law</h2>
                <ul className="space-y-4 text-gray-600">
                  <li>
                    <strong>Contract Law:</strong> Governs agreements between parties, including formation, performance, breach, and remedies.
                  </li>
                  <li>
                    <strong>Property Law:</strong> Deals with ownership, use, and transfer of real and personal property.
                  </li>
                  <li>
                    <strong>Tort Law:</strong> Addresses civil wrongs that cause harm or injury to others, including negligence and intentional torts.
                  </li>
                  <li>
                    <strong>Family Law:</strong> Covers domestic relations, including marriage, divorce, child custody, and adoption.
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Civil Litigation Process</h2>
                <ol className="space-y-4 text-gray-600">
                  <li>1. Filing a Complaint: The plaintiff initiates the lawsuit by filing a formal complaint.</li>
                  <li>2. Discovery: Both parties gather evidence through documents, depositions, and interrogatories.</li>
                  <li>3. Pre-trial Motions: Legal issues are resolved before trial through various motions.</li>
                  <li>4. Trial: Presentation of evidence and arguments before a judge or jury.</li>
                  <li>5. Judgment and Appeals: The court issues a decision, which may be appealed.</li>
                </ol>

                <div className="bg-indigo-50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold mb-4">Common Civil Law Remedies</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Monetary damages</li>
                    <li>• Injunctive relief</li>
                    <li>• Specific performance</li>
                    <li>• Declaratory judgments</li>
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

export default CivilLaw;