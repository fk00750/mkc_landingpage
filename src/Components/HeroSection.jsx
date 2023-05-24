import React from "react";
import bgImage2 from "../../public/d1.png";
import Content1 from "./ContentComponents/Content1";
import Form from "./Form";
import teacherImage from "../../public/teach.png";

// The Content of hero section content are quite apart and not layout correctly
// especially teacher and Content_form
// Can you do something about it?
function HeroSection() {
  return (
    <div className="w-screen  flex items-center justify-center">
      <div className="w-full h-full flex justify-center ">
        <div
          className="bg-cover bg-no-repeat bg-center rounded-bl-3xl"
          style={{
            backgroundImage: `url(${bgImage2})`,
            width: "100%",
            height: "80%",
          }}
        >
          {/* Hero Section Content */}
          <div className="flex items-center justify-center -space-x-48">
            <div id="teacher" className="mr-4">
              <img src={teacherImage} alt="" className="w-full h-96" />
            </div>
            <div id="Content_form" className="flex flex-col justify-center">
              <div className="text-center my-2">
                <Content1 />
              </div>
              <div className="p-8 flex items-center justify-center">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default HeroSection;
