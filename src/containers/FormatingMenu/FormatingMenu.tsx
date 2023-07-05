import style from "./FormatingMenu.module.css";
import {
  RecoilState,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { ActiveCellState } from "../../store/ActiveCellState";
import { CellBoldState } from "../../store/CellBoldState";

const FormattingMenu = () => {
  const activeCell = useRecoilValue(ActiveCellState);
  const setCellBoldState = useSetRecoilState(CellBoldState(activeCell));
  const cellBoldState = useRecoilValue(CellBoldState(activeCell));

  // Event handlers for formatting options
  const handleBoldToggle = () => {
    setCellBoldState((prevCellBoldState) => !prevCellBoldState);
    console.log(cellBoldState);
  };

  return (
    <div className={style.menubox}>
      <ul>
        <li>
          <a
            className={`${style.BoldButton} ${
              cellBoldState ? style.Active : ""
            }`}
            onClick={handleBoldToggle}
          >
            B
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FormattingMenu;
