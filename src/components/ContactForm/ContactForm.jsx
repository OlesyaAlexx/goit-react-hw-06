import { Form, Formik, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import style from "./ContactForm.module.css";

// Функція ContactForm для додавання нового контакту
// приймає пропс addContact і додає новий контакт
const ContactForm = ({ addContact }) => {
  // Функція -обробник відправки форми
  //values це значення введені у форму
  //actions це для скидання форми після відправки
  const handleSubmit = (values, actions) => {
    // Додаємо новий контакт, генеруємо унікальний id за допомогою nanoid
    addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    // Скидаємо форму після відправки
    actions.resetForm();
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
      initialValues={{ name: "", number: "" }}
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
