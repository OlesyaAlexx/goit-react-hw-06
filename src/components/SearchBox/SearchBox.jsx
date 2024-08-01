import styles from "./SearchBox.module.css";

//Функція для створення розмітки компонента
//value це значення поля вводу, яке відображається у текстовому полі.
//onSearch це функція-обробник, яка викликається при зміні значення у полі вводу.
const SearchBox = ({ value, onSearch }) => {
  return (
    <div>
      <p className={styles.searchText}>Find contacts by name</p>
      <input
        className={styles.inputSearch}
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};
export default SearchBox;
