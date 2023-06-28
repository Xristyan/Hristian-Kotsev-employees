import React from "react";
import { parse } from "papaparse";
import classes from "./fileUpload.module.css";
const FileUpload = (props) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      parse(file, {
        complete: (results) => {
          props.onFileUpload(results.data);
        },
        header: true,
      });
    }
  };

  return (
    <div className={classes["file-input-wrapper"]}>
      <label htmlFor="file-upload" className={classes["file-input-label"]}>
        Choose a file
      </label>
      <input
        id="file-upload"
        type="file"
        className={classes["file-input"]}
        accept=".csv"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUpload;
