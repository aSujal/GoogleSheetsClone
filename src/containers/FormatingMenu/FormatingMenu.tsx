import React, { ChangeEvent } from "react";
import style from "./FormatingMenu.module.css";

const FormattingMenu = () => {
  // State variables for formatting options
  const [bold, setBold] = React.useState(false);
  const [italic, setItalic] = React.useState(false);
  const [fontSize, setFontSize] = React.useState("13px");
  const [textColor, setTextColor] = React.useState("#000000");
  const [cellColor, setCellColor] = React.useState("#ffffff");

  // Event handlers for formatting options
  const handleBoldToggle = () => {
    setBold((prevBold) => !prevBold);
  };

  const handleItalicToggle = () => {
    setItalic((prevItalic) => !prevItalic);
  };

  const handleFontSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFontSize(event.target.value);
  };

  const handleTextColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextColor(event.target.value);
  };

  const handleCellColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCellColor(event.target.value);
  };

  return (
    <div className={style.menubox}>
      <label>
        <input type="checkbox" checked={bold} onChange={handleBoldToggle} />
        Bold
      </label>
      <label>
        <input type="checkbox" checked={italic} onChange={handleItalicToggle} />
        Italic
      </label>
      <label>
        Font Size:
        <input type="text" value={fontSize} onChange={handleFontSizeChange} />
      </label>
      <label>
        Text Color:
        <input
          type="color"
          value={textColor}
          onChange={handleTextColorChange}
        />
      </label>
      <label>
        Cell Color:
        <input
          type="color"
          value={cellColor}
          onChange={handleCellColorChange}
        />
      </label>
    </div>
  );
};

export default FormattingMenu;
