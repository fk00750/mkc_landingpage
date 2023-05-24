import React from "react";
import feature5 from "../../../public/feature5.jpg";


function Feature5() {
  return (
    <div className="container mx-auto max-w-md bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Time Management Strategies
        </h2>
        <div className="mb-4">
          <img src={feature5} alt="Feature" className="w-full" />
        </div>
        <p className="text-gray-600 mb-4">
          Learn effective time management techniques for exams.
        </p>
        <p className="text-gray-600 mb-4">
          Benefit: Optimize your study schedule and enhance your exam
          preparation efficiency.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Show More
        </button>
      </div>
    </div>
  );
}

export default Feature5;
