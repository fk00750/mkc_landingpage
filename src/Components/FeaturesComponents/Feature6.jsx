import React from "react";
import feature6 from "/home/acer/landingpage/public/feature6.jpg";

function Feature6() {
  return (
    <div className="container mx-auto max-w-md bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Doubt Clearing Sessions
        </h2>
        <div className="mb-4">
          <img src={feature6} alt="Feature" className="w-full" />
        </div>
        <p className="text-gray-600 mb-4">
          Participate in live doubt clearing sessions with faculty.
        </p>
        <p className="text-gray-600 mb-4">
          Benefit: Get your queries resolved and strengthen your understanding
          of challenging topics.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Show More
        </button>
      </div>
    </div>
  );
}

export default Feature6;
