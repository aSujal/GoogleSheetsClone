import style from "./TitleMenu.module.css";

const TitleMenu = () => {
  return (
    <div>
      <ul>
        <li>
          <button className={style.MenuButton}> Save </button>
        </li>
        <li>
          <button className={style.MenuButton}> Load </button>
        </li>
      </ul>
    </div>
  );
};

export default TitleMenu;
