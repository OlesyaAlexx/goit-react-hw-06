import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

//SearchBox функція для створення розмітки компонента
//value це значення поля вводу, яке відображається у текстовому полі.
//handleFilterChange це функція-обробник, яка реагує на зміни введені користувачем
//в поле вводу і передає зміни як payload до екшена changeFilter
//а потім відправляє їх до Redux store  за допомогою dispatch.

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(selectNameFilter);
  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div>
      <p className={styles.searchText}>Find contacts by name</p>
      <input
        className={styles.inputSearch}
        type="text"
        value={filterName}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default SearchBox;
