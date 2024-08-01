import styles from "./Contact.module.css";

//Імпортуємо іконки з бібліотеки react-icons для використання у компоненті.
import { FaPhone } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";

//Функція для створення розмітки компонента
//data це об'єкт, що містить дані контакту (id, name, number).
//onDelete це фnpm run devункція-обробник для видалення контакту.
const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={styles.containerContact}>
      <div className={styles.info}>
        <p>
          <RiContactsFill className={styles.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={styles.icon} />
          {number}
        </p>
      </div>
      <button className={styles.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
