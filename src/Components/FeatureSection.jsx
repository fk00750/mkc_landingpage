import React from "react";
import Feature1 from "../Components/FeaturesComponents/Feature1";
import Feature2 from "./FeaturesComponents/Feature2";
import Feature3 from "./FeaturesComponents/Feature3";
import Feature4 from "./FeaturesComponents/Feature4";
import Feature5 from "./FeaturesComponents/Feature5";
import Feature6 from "./FeaturesComponents/Feature6";

/**
 * Follow the given instructions:
 * - Create a responsive grid system in tailwindCSS to style the features in features_container className.
 * - First row should have 3
 * - and the rest features should go into next row
 */
function FeatureSection() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-bold mb-8">
          Revolutionize Your Preparation: Discover the Benefits of Major Kalshi
          Classes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <Feature1 />
          </div>
          <div>
            <Feature2 />
          </div>
          <div className="flex justify-center">
            <Feature3 />
          </div>
          <div className="col-span-1 flex justify-center">
            <Feature4 />
          </div>
          <div className="col-span-1 flex justify-center">
            <Feature5 />
          </div>
          <div className="col-span-1 flex justify-center">
            <Feature6 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
