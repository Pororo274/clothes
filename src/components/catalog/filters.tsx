import burger from "../../assets/icons/burger.svg";
import filter from "../../assets/icons/filter.svg";
import glass from "../../assets/icons/glass.svg";

export default function Filters() {
  return (
    <div className="catalog-filters">
      <div className="wrapper">
        <button className="form-button">
          <img src={burger} alt="" className="form-button__img" />
        </button>
        <button className="form-button">
          <img src={filter} alt="" className="form-button__img" />
        </button>
        <select name="" id="" className="select">
          <option value="1" className="option">
            По популярности
          </option>
          <option value="2" className="option">
            По цене (сначала дорогие)
          </option>
          <option value="3" className="option">
            По цене (сначала дешевые)
          </option>
        </select>
        <div className="search">
          <input type="text" className="search-input" placeholder="Поиск" />
          <img src={glass} alt="" className="search__img" />
        </div>
      </div>
    </div>
  );
}
