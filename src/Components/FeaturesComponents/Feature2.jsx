import React from 'react';
import feature2 from '../../../public/feature2.jpg'

function Feature2() {
  return (
    <div className="container mx-auto max-w-md bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
        Expert Faculty Guidance
        </h2>
        <div className="mb-4">
          <img src={feature2} alt="Feature" className="w-full" />
        </div>
        <p className="text-gray-600 mb-4">
        Learn from experienced and qualified faculty members.
        </p>
        <p className="text-gray-600 mb-4">
          Benefit: Receive personalized guidance and expert insights for exam preparation.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Show More
        </button>
      </div>
    </div>
  );
}

export default Feature2;
