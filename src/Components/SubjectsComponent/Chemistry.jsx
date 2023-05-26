import React from "react";
import chemistryImage from "../../../public/chemistry.png";

function Chemistry() {
  return (
    <div className="bg-white rounded-md shadow-md p-6 border border-gray-400">
      <h1 className="text-2xl font-bold mb-4">Chemistry</h1>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2">
          <p className="text-gray-700">
            Chemistry plays a crucial role in JEE and NEET exams. It is one of
            the core subjects that students need to master in order to excel in
            these competitive exams.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
            Explore more
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
          <img
            src={chemistryImage}
            alt="Chemistry"
            className="w-24 md:w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Chemistry;
