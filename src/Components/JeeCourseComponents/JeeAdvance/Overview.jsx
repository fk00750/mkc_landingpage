import ExamPattern from "./components/ExamPattern";
import ExamSchedule from "./components/ExamSchedule";
import MarkingScheme from "./components/MarkingScheme";

function Overview() {
  return (
    <div>
      {/* Exam Schedule Section */}
      <ExamSchedule />

      {/* Exam Scheme Overview */}

      {/* Exam Pattern Overview */}
      <ExamPattern
        Paper={"Paper 1"}
        Section1_typeOfQues={"MCQs with a single correct option"}
        Section2_typeOfQues={"Single correct option"}
        Section3_typeOfQues={"Numerical value answer	"}
      />

      {/* Exam Pattern Overview */}
      <ExamPattern
        Paper={"Paper 2"}
        Section1_typeOfQues={"MCQs with more than one correct answer"}
        Section2_typeOfQues={"Numerical value answer type questions"}
        Section3_typeOfQues={"Signle-digit integer answer(0-9)"}
      />

      {/* Marking Scheme  */}
      <MarkingScheme />
    </div>
  );
}

export default Overview;
