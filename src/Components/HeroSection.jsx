import React from "react";
import bgImage2 from "../../public/d2.png";
import Content1 from "./ContentComponents/Content1";
import Form from "./Form";
import teacherImage from "../../public/logoBG.png";

function HeroSection() {
  return (
<div className="w-screen flex items-center justify-center">
  <div className="w-full h-full flex justify-center">
    <div
      className="bg-cover bg-no-repeat bg-center rounded-bl-[78px]"
      style={{
        backgroundImage: `url(${bgImage2})`,
        width: "100%",
        height: "80%",
      }}
    >
      {/* Hero Section Content */}
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div id="teacher" className="mx-4">
          <img src={teacherImage} alt="" className="w-full h-96" />
        </div>
        <div id="Content_form" className="flex flex-col items-center justify-center mt-8 sm:mt-0 sm:ml-48">
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
