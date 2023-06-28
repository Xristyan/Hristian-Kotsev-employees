import daysWorked from "./daysWorked";
const groupingEmployees = (employeeData) => {
  const employeesByProject = {};
  employeeData.forEach((employee) => {
    const projectId = employee.ProjectID;
    if (!employeesByProject[projectId]) {
      employeesByProject[projectId] = [];
    }
    employeesByProject[projectId].push(employee);
  });

  return groupById(employeesByProject);
};

const groupById = (employeesByProject) => {
  const employeesByIds = {};

  for (const projectId in employeesByProject) {
    const employees = employeesByProject[projectId];
    if (employees.length >= 2) {
      for (let i = 0; i < employees.length - 1; i++) {
        for (let j = i + 1; j < employees.length; j++) {
          const employee1 = employees[i];
          const employee2 = employees[j];
          const employee = {
            id: uniqueId(),
            employeeId1: employee1.EmpID,
            employeeId2: employee2.EmpID,
            projectId: projectId,
            daysWorked: daysWorked(
              employee1.DateFrom,
              employee1.DateTo,
              employee2.DateFrom,
              employee2.DateTo
            ),
          };
          const fieldName = `${employee.employeeId1}-${employee.employeeId2}`;
          const reversedFieldName = `${employee.employeeId2}-${employee.employeeId1}`;

          if (
            !employeesByIds[fieldName] &&
            !employeesByIds[reversedFieldName]
          ) {
            employeesByIds[fieldName] = { totalDays: 0, group: [] };
          }

          employeesByIds[
            !employeesByIds[fieldName] ? reversedFieldName : fieldName
          ].group.push(employee);
          employeesByIds[
            !employeesByIds[fieldName] ? reversedFieldName : fieldName
          ].totalDays += employee.daysWorked;
        }
      }
    }
  }

  return employeesByIds;
};
const uniqueId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

export default groupingEmployees;
