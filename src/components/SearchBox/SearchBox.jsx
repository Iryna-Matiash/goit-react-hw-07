import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.name);

  return (
    <div className={css.container}>
      <p className={css.filterName}>Find contacts by name</p>
      <input
        type="text"
        value={filters}
        onChange={(el) => dispatch(changeFilter(el.target.value))}
      ></input>
    </div>
  );
}
