import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CriminalLaw = () => {
  return (
    <>
      <Helmet>
        <title>Criminal Law Guide - BestAttorneyInfos</title>
        <meta name="description" content="Understanding criminal law basics, including rights, procedures, and common terms in criminal justice." />
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
              src="https://images.unsplash.com/photo-1453945619913-79ec89a82c51?auto=format&fit=crop&w=2000&q=80"
              alt="Criminal Law"
              className="w-full h-96 object-cover"
            />
            
            <div className="p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-indigo-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">Criminal Law</h1>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  Criminal law deals with conduct that is considered harmful to social order and welfare. It involves prosecuting individuals who commit crimes, while ensuring their constitutional rights are protected throughout the legal process.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Fundamental Concepts</h2>
                <ul className="space-y-4 text-gray-600">
                  <li>
                    <strong>Elements of a Crime:</strong> Criminal intent (mens rea) and criminal act (actus reus).
                  </li>
                  <li>
                    <strong>Constitutional Rights:</strong> Including the right to remain silent, right to counsel, and protection against unreasonable searches.
                  </li>
                  <li>
                    <strong>Burden of Proof:</strong> The prosecution must prove guilt "beyond a reasonable doubt."
                  </li>
                  <li>
                    <strong>Types of Crimes:</strong> Felonies, misdemeanors, and infractions.
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Criminal Justice Process</h2>
                <ol className="space-y-4 text-gray-600">
                  <li>1. Investigation and Arrest</li>
                  <li>2. Booking and Initial Appearance</li>
                  <li>3. Preliminary Hearing or Grand Jury</li>
                  <li>4. Arraignment and Plea</li>
                  <li>5. Pre-trial Motions</li>
                  <li>6. Trial</li>
                  <li>7. Sentencing</li>
                  <li>8. Appeals</li>
                </ol>

                <div className="bg-indigo-50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold mb-4">Common Criminal Defenses</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Self-defense</li>
                    <li>• Alibi</li>
                    <li>• Insanity</li>
                    <li>• Duress</li>
                    <li>• Statute of limitations</li>
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

export default CriminalLaw;