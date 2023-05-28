import React from "react";
import feature1 from "../../public/feature1.jpg";
import feature2 from "../../public/feature2.jpg";
import feature3 from "../../public/feature3.jpg";
import feature4 from "../../public/feature4.jpg";
import feature5 from "../../public/feature5.jpg";
import feature6 from "../../public/feature6.jpg";

function Feature({ title, image, description }) {
  return (
    <div className="container mx-auto max-w-md bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        <div className="mb-4">
          <img src={image} alt="Feature" className="w-full" />
        </div>
        {description.map((paragraph, index) => (
          <p className="text-gray-600 mb-4" key={index}>
            {paragraph}
          </p>
        ))}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Show More
        </button>
      </div>
    </div>
  );
}

function FeatureSection() {
  const features = [
    {
      title: "Comprehensive Study Materials",
      image: feature1,
      description: [
        "Access a vast collection of well-organized study materials.",
        "Benefit: Gain in-depth knowledge and understanding of JEE and NEET concepts.",
      ],
    },
    {
      title: "Expert Faculty Guidance",
      image: feature2,
      description: [
        "Learn from experienced and qualified faculty members.",
        "Benefit: Receive personalized guidance and expert insights for exam preparation.",
      ],
    },
    {
      title: "Interactive Practice Tests",
      image: feature3,
      description: [
        "Engage in interactive practice tests and quizzes.",
        "Benefit: Assess your understanding, identify weak areas, and improve exam performance.",
      ],
    },
    {
      title: "Mock Exams and Performance Analysis",
      image: feature4,
      description: [
        "Take mock exams to simulate real exam conditions.",
        "Benefit: Evaluate your readiness, analyze your performance, and fine-tune your exam strategy.",
      ],
    },
    {
      title: "Time Management Strategies",
      image: feature5,
      description: [
        "Learn effective time management techniques for exams.",
        "Benefit: Optimize your study schedule and enhance your exam preparation efficiency.",
      ],
    },
    {
      title: "Doubt Clearing Sessions",
      image: feature6,
      description: [
        "Participate in live doubt clearing sessions with faculty.",
        "Benefit: Get your queries resolved and strengthen your understanding of challenging topics.",
      ],
    },
    // Add more features as needed
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-bold mb-8">
          Revolutionize Your Preparation: Discover the Benefits of Major Kalshi
          Classes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex justify-center">
              <Feature {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
