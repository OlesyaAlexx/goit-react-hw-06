import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css"

// Функція для створення компонента ContactList
//contacts це масив контактів, які потрібно відобразити.
//onDeleteце функція, яка буде викликатися при видаленні контакту.
const ContactList = ({ contacts, onDelete }) => {
  // Якщо список контактів порожній, відобразиться повідомлення
  if (!contacts || contacts.length === 0) {
    return <p>No contacts available</p>;
  }

  return (
    // Використання методу map для проходження по кожному контакту у списку та для рендерення компонента Contact
    <ul className={styles.list}>
      {contacts.map((contact) => (
        // Використання унікального ключа для кожного компонента, передача даних контакту як пропс "data"
        // та передача функції видалення контакту як пропс "onDelete"
        <li className={styles.item} key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
