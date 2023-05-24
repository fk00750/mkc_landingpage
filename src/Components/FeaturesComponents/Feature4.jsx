import React from "react";
import feature4 from "../../../public/feature4.jpg";

function Feature4() {
  return (
    <div className="container mx-auto max-w-md bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Mock Exams and Performance Analysis
        </h2>
        <div className="mb-4">
          <img src={feature4} alt="Feature" className="w-full" />
        </div>
        <p className="text-gray-600 mb-4">
          Take mock exams to simulate real exam conditions.
        </p>
        <p className="text-gray-600 mb-4">
          Benefit: Evaluate your readiness, analyze your performance, and
          fine-tune your exam strategy.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Show More
        </button>
      </div>
    </div>
  );
}

export default Feature4;
