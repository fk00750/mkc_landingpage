import React from "react";
import BiologySyllabus from "../SyllabusComponents/BiologySyllabus";
import ChemistrySyllabus from "../SyllabusComponents/ChemistrySyllabus";
import PhysicsSyllabus from "../SyllabusComponents/PhysicsSyllabus";

function Syllabus() {
  return (
    <div className="syllabus_container bg-gray-200 flex items-center justify-center py-2 mx-24 rounded-md mt-6 my-10">
      <div className="mx-2 my-2">
        <PhysicsSyllabus />
        <ChemistrySyllabus />
        <BiologySyllabus />
      </div>
    </div>
  );
}

export default Syllabus;
