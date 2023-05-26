import React from "react";
import ChairPersonImage from "../../../public/female1.png";
import DirectorImage from "../../../public/male1.png";

const Content = [
  {
    image: ChairPersonImage,
    name: "REKHA SINGH",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi sit expedita, officiis id quas aperiam voluptates repellat ducimus modi perspiciatis reiciendis, odit, dignissimos exercitationem praesentium temporibus soluta natus magnam explicabo. Voluptate, sapiente. Possimus dolores officia sint nulla, accusamus nostrum consequuntur a dolor? Ut, optio autem",
  },
  {
    image: DirectorImage,
    name: "SAURABH SINGH",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi sit expedita, officiis id quas aperiam voluptates repellat ducimus modi perspiciatis reiciendis, odit, dignissimos exercitationem praesentium temporibus soluta natus magnam explicabo. Voluptate, sapiente. Possimus dolores officia sint nulla, accusamus nostrum consequuntur a dolor? Ut, optio autem",
  },
];


function ChairpersonAndDirectorMessage() {
  return (
    <div className="container mx-auto py-4">
      <div>
        <h1 className="text-center text-4xl font-bold mb-5">Chairperson's & Director's Message</h1>
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
