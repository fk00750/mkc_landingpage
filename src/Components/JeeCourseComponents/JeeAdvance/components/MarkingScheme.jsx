import React from "react";

const data = [
  {
    Section: "1",
    "Question Type": "Single Correct Option",
    "Total Questions": "6",
    "Full Marks": "+4 If only (all) the correct option (s) is (are) chosen",
    "Partial Marks": {
      "+3": "If all four options are correct, but only three options are chosen",
      "+2": "If three or more options are correct, but only two options are chosen, both of the options must be correct",
      "+1": "If two or more options are correct, but only one option is chosen, and it must be correct",
    },
    "Negative Marks": "-2 (in all other cases)",
    "Maximum Marks": "-",
  },
  {
    Section: "2",
    "Question Type": "One or more options is correct",
    "Total Questions": "6",
    "Full Marks": "+4 If only (all) the correct option (s) is (are) chosen",
    "Partial Marks": "-",
    "Negative Marks": "-",
    "Maximum Marks": "24",
  },
  {
    Section: "3",
    "Question Type": "Numerical Value Answer",
    "Total Questions": "6",
    "Full Marks": "+3 if only the correct integer is entered",
    "Partial Marks": "-",
    "Negative Marks": "-1 in all other cases",
    "Maximum Marks": "24",
  },
];

function MarkingScheme() {
  return (
    <div className="flex flex-col my-2">
      <h1 className="text-2xl font-bold mb-4">{`JEE Advanced Marking Scheme: Paper 1`}</h1>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    Section
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    Question Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    Total Questions
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    Full Marks
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    Partial Marks
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    Negative Marks
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    Maximum Marks
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.Section}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item["Question Type"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item["Total Questions"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item["Full Marks"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {typeof item["Partial Marks"] === "object" ? (
                        <table className="w-full">
                          <tbody>
                            {Object.entries(item["Partial Marks"]).map(
                              ([key, value]) => (
                                <tr key={key}>
                                  <td className="px-2 py-1 text-xs lg:text-base md:text-sm text-gray-700">
                                    {key}
                                  </td>
                                  <td className="px-2 py-1 text-xs lg:text-base md:text-sm text-gray-700">
                                    {value}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      ) : (
                        item["Partial Marks"]
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm lg:text-base text-gray-700">
                      {item["Negative Marks"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm lg:text-base  text-gray-700">
                      {item["Maximum Marks"]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarkingScheme;
