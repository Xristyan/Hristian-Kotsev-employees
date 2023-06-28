import React, { useState } from "react";
import FileUpload from "./components/inputFile/fileUpload";
import groupingEmployees from "./components/utils/groupingEmployees";
import Table from "./components/table/table";

function App() {
  const [employeesLongestTime, setEmployeesLongestTime] = useState([]);

  const fileUpload = (employeeData) => {
    const groupedEmployees = groupingEmployees(employeeData);
    console.log(groupedEmployees);
    let longestTime = [];
    let daysCount = 0;
    for (const key in groupedEmployees) {
      if (groupedEmployees[key].totalDays > daysCount) {
        longestTime = groupedEmployees[key].group;
        daysCount = groupedEmployees[key].totalDays;
      }
    }
    setEmployeesLongestTime(longestTime);
  };
  return (
    <>
      <FileUpload onFileUpload={fileUpload} />
      <Table data={employeesLongestTime} />
    </>
  );
}

export default App;
