import { Form, Formik, Field, ErrorMessage } from "formik";
import { nanoid } from "@reduxjs/toolkit";
import * as Yup from "yup";
import style from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

// Функція ContactForm для додавання нового контакту

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = { name: "", number: "" };
  // Функція -обробник відправки форми
  const handleSubmit = (values, options) => {
    // Додаємо новий контакт, генеруємо унікальний id за допомогою nanoid
    const newItem = { name: values.name, number: values.number, id: nanoid() };
    dispatch(addContact(newItem));
    // Скидаємо форму після відправки
    options.resetForm();
  };
  // Схема валідації для форми за допомогою Yup
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "To Short!")
      .max(50, "To Long!")
      .required("Required!"),
    number: Yup.string()
      .matches(/^[0-9]+(-[0-9]+)*$/, "Invalid format")
      .min(3, "To Short!")
      .max(50, "To Long!")
      .required("Required!"),
  });

  return (
    // Налаштування Formik з початковими значеннями, обробником відправки та схемою валідації
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={style.form}>
        <Field
          className={style.input}
          type="text"
          name="name"
          placeholder="Name"
        />
        <ErrorMessage className={style.error} name="name" component="span" />
        <Field
          className={style.input}
          type="text"
          name="number"
          placeholder="Number"
        />
        <ErrorMessage className={style.error} name="number" component="span" />
        <button className={style.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
