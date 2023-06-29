import React, { useState } from "react";
import FileUpload from "./components/inputFile/fileUpload";
import groupingEmployees from "./components/utils/groupingEmployees";
import Table from "./components/table/table";

function App() {
  const [employeesLongestTime, setEmployeesLongestTime] = useState([]);
  const [displayTable, setDisplayTable] = useState(false);

  const fileUpload = (employeeData) => {
    if (employeeData.length === 0) {
      setDisplayTable(false);
      return;
    }
    const groupedEmployees = groupingEmployees(employeeData);
    let longestTime = [];
    let daysCount = 0;
    for (const key in groupedEmployees) {
      if (groupedEmployees[key].totalDays > daysCount) {
        longestTime = groupedEmployees[key].group;
        daysCount = groupedEmployees[key].totalDays;
      }
    }
    setEmployeesLongestTime(longestTime);
    if (longestTime.length > 0) {
      setDisplayTable(true);
    }
    if (longestTime.length === 0) {
      setDisplayTable(false);
    }
  };
  return (
    <>
      <FileUpload onFileUpload={fileUpload} />
      {displayTable && <Table data={employeesLongestTime} />}
    </>
  );
}

export default App;
