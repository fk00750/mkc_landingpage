import React from "react";
import ChairPersonImage from "../../../public/female1.png";
import DirectorImage from "../../../public/male1.png";

const Content = [
  {
    image: ChairPersonImage,
    name: "REKHA SINGH",
    message:
      "As the Chairperson of Major Kalshi Classes, I am honored to welcome students and parents to our esteemed institution. Our focus is on providing top-quality coaching and guidance to aspiring medical and engineering students, with a commitment to nurturing their academic growth and personal development. With a team of experienced faculty, innovative teaching methods, and comprehensive study materials, we aim to empower students to excel in their exams.",
  },
  {
    image: DirectorImage,
    name: "SAURABH SINGH",
    message:
      "Dear Students and Parents, It is with great pleasure and enthusiasm that I extend a warm welcome to Major Kalshi Classes, a leading coaching institute dedicated to transforming your dreams into reality. As the Director of this esteemed institution, I am committed to providing you with the best education and guidance that will pave the way for your success in the medical and engineering fields.",
  },
];

function ChairpersonAndDirectorMessage() {
  return (
    <div className="container mx-auto py-4">
      <div>
        <h1 className="text-center text-4xl font-bold mb-5">
          Chairperson's & Director's Message
        </h1>
      </div>
      {/* Chairperson and Director Message */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Content.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white shadow-lg rounded-lg p-6 flex"
          >
            <div className="mr-6 border bg-white flex-shrink-0">
              <div className="w-28 h-48 overflow-hidden rounded-full">
                <img
                  src={item.image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-white">{item.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChairpersonAndDirectorMessage;
