import React from "react";
import feature3 from "../../../public/feature3.jpg";

function Feature3() {
  return (
    <div className="container mx-auto max-w-md bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Interactive Practice Tests
        </h2>
        <div className="mb-4">
          <img src={feature3} alt="Feature" className="w-full" />
        </div>
        <p className="text-gray-600 mb-4">
          Engage in interactive practice tests and quizzes.
        </p>
        <p className="text-gray-600 mb-4">
          Benefit: Assess your understanding, identify weak areas, and improve
          exam performance.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Show More
        </button>
      </div>
    </div>
  );
}

export default Feature3;
