import classes from "./table.module.css";

const Table = (props) => {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>EmpId1</th>
          <th>EmpId2</th>
          <th>ProjectID</th>
          <th>daysWorked</th>
        </tr>
      </thead>
      <tbody>
        {props.data
          .slice()
          .filter((el) => el.daysWorked > 0)
          .sort((a, b) => b.daysWorked - a.daysWorked)
          .map((item) => (
            <tr key={item.id}>
              <td>{item.employeeId1}</td>
              <td>{item.employeeId2}</td>
              <td>{item.projectId}</td>
              <td>{item.daysWorked}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
