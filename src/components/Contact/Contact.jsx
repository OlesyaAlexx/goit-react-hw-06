//Імпортуємо іконки з бібліотеки react-icons для використання у компоненті.
import styles from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

// Функція для створення розмітки компонента
const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  // Функція для видаленя  контакту
  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={styles.containerContact}>
      <div className={styles.info}>
        <p>
          <RiContactsFill className={styles.icon} />
          {contact.name}
        </p>
        <p>
          <FaPhone className={styles.icon} />
          {contact.number}
        </p>
      </div>
      <button
        className={styles.button}
        onClick={() => handleDeleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
