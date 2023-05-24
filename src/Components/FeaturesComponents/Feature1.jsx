import React from "react";
import feature1 from "/home/acer/landingpage/public/feature1.jpg";

function Feature1() {
  return (
    <div className="container mx-auto max-w-md bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Comprehensive Study Materials
        </h2>
        <div className="mb-4">
          <img src={feature1} alt="Feature" className="w-full" />
        </div>
        <p className="text-gray-600 mb-4">
          Access a vast collection of well-organized study materials.
        </p>
        <p className="text-gray-600 mb-4">
          Benefit: Gain in-depth knowledge and understanding of JEE and NEET
          concepts.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Show More
        </button>
      </div>
    </div>
  );
}

export default Feature1;
