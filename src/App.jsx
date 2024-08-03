//Імпортуємо файли з папки components та data в App.jsx

import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

// Створюємо головний компонент App

const App = () => {
  //Створюємо розмітку компонентів
  return (
    <div className="wrapper">
      <div className="contactBook">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
};
export default App;
