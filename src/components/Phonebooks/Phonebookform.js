import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// паттерн для проверки номера
const phoneRegExp =
  /^\+?\d{1,4}?[ .-]?(\(\d{1,3}\))?([ .-]?\d{1,4}){1,4}([ .-]?\d{1,9})?$/;

// паттерн для проверки имени
const nameRegExp =
  "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

const schema = Yup.object().shape({
  name: Yup.string()
    // .min(3, 'Shouls be more 3')
    .matches(
      nameRegExp,
      'Name may only contain letters, apostrophe, dash, and spaces'
    )
    .required('Required'),
  number: Yup.string()
    // .min(3, 'Shouls be more 3')
    .matches(phoneRegExp, 'Invalid phone number format')
    .required('Required'),
});

export const Phonebookform = ({ addContacts }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={values => {
        addContacts(values);
      }}
    >
      <Form>
        <label>
          Name
          <Field name="Name" placeholder="Olena" />
          <ErrorMessage name="Name" component="div" />
        </label>

        <label>
          Number
          <Field name="Number" placeholder="380671633600" />
          <ErrorMessage name="Number" component="div" />
        </label>

        <button type="submit">Добавить контакт</button>
      </Form>
    </Formik>
  );
};
