import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import style from "./TitleMenu.module.css";
import {
  alphabeticalIndices,
  numberOfColumns,
  numberOfRows,
} from "../../compenents/Sheet/Sheet";

const TitleMenu: FunctionComponent = () => {
  const [fileName, setFileName] = useState("");

  const handleSave = () => {
    const csvContent = generateCSVContent(); // Generate the CSV content
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    // Create a temporary anchor element to download the file
    const link = document.createElement("a");
    if (fileName) {
      link.download = `${fileName}.csv`; // Set the file name with .csv extension
    } else {
      link.download = "sheet.csv"; // Default file name if no name is provided
    }
    link.href = URL.createObjectURL(blob);
    link.style.display = "none";

    // Append the anchor element to the document body and click it
    document.body.appendChild(link);
    link.click();

    // Clean up by removing the anchor element
    document.body.removeChild(link);
  };
  const generateCSVContent = () => {
    let csvContent = "";

    // Iterate over the rows and columns
    for (let rowIndex = 1; rowIndex <= numberOfRows; rowIndex++) {
      for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
        const cellId = `${alphabeticalIndices[columnIndex]}${rowIndex}`;
        const cellValue =
          document.querySelector(`[data-cell-id="${cellId}"]`)?.textContent ||
          "";

        // Replace any double quotes with two double quotes to escape them
        const escapedValue = cellValue.replace(/"/g, '""');

        // Wrap the cell value in double quotes if it contains a comma, double quote, or new line
        const wrappedValue = /["\n,]/.test(escapedValue)
          ? `"${escapedValue}"`
          : escapedValue;

        // Append the cell value to the CSV content
        csvContent += wrappedValue;

        // Append a comma for all cells except the last cell in each row
        if (columnIndex < numberOfColumns - 1) {
          csvContent += ",";
        } else {
          // Append a new line character for the last cell in each row
          csvContent += "\n";
        }
      }
    }

    return csvContent;
  };

  // Function to handle the file name input change
  const handleFileNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
  };

  return (
    <div>
      <ul>
        <li>
          <input
            className={style.FileNameInput}
            type="text"
            placeholder="File Name"
            value={fileName}
            onChange={handleFileNameChange}
          />
        </li>
        <li>
          <button className={style.MenuButton} onClick={handleSave}>
            Save
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TitleMenu;
