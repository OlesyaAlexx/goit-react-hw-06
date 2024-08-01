//Імпортуємо файли з папки components та data в App.jsx

import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";
import initialContacts from "./data/contacts.json";
import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

// Створюємо головний компонент App

const App = () => {
  // Використовуємо useState для створення стану контактів
  // спочатку завантажуєм їх з локального сховища або використовуєм початкові контакти
  const [contacts, setContacts] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("contactKey"));
    return savedData || initialContacts;
  });

  // Використовуємо useState для створення стану для фільтрації контактів за ім'ям
  const [search, setSearch] = useState("");

  // Використовуємо useEffect для збереження стану контактів у localStorage при кожній зміні
  useEffect(() => {
    window.localStorage.setItem("contactKey", JSON.stringify(contacts));
  }, [contacts]);

  //Функція для додавання нових контактів
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  //Функція для видалення контактів за id
  const handleDelete = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  //Фільтрація контактів за "name" та приведення до нижнього регістру літер для нечутливості до регістру
  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  //Створюємо розмітку компонентів
  return (
    <div className="wrapper">
      <div className="contactBook">
        <h1 className="title">Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox value={search} onSearch={setSearch} />
        <ContactList contacts={visibleContact} onDelete={handleDelete} />
      </div>
    </div>
  );
};
export default App;
