import { useState, useEffect } from "react";
import classes from "./table.module.css";

const Table = (props) => {
  const [displayTable, setDisplayTable] = useState(false);

  useEffect(() => {
    if (props.data.length > 0) {
      setDisplayTable(true);
    }
    if (props.data.length === 0) {
      setDisplayTable(false);
    }
  }, [props.data]);

  return (
    <>
      {displayTable ? (
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
      ) : (
        ""
      )}
    </>
  );
};

export default Table;
