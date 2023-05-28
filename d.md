Do you find the following react components violating DRY principle

1.```
import React from "react";
import feature1 from '../../../public/feature1.jpg';

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
```

1. ```
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
```

3. ```
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
```

4.```
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
```

5. ```
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
```

6. ```
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
```