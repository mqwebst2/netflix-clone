import { useState } from 'react';
import styles from '../css/Form.module.css';

let Form = (props) => {
  const [values, setValues] = useState({
    apiKey: '',
    title: '',
  });
  let handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className={styles.Form}>
      <h1>Search for your favorite movie</h1>
      <form
        className={styles.formSubmit}
        onSubmit={(evt) => {
          props.onSubmit(evt, values.apiKey, values.title);
          setValues((prevValues) => ({ ...prevValues, title: '' }));
        }}
      >
        <label htmlFor='apiKey' className={styles.formLabel}>
          API Key:{' '}
          <input
            type='text'
            placeholder='Api Key'
            name='apiKey'
            className={styles.formInput}
            value={values.apiKey}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='title' className={styles.formLabel}>
          Movie Title:{' '}
          <input
            type='text'
            placeholder='Movie Title'
            name='title'
            className={styles.formInput}
            value={values.title}
            onChange={handleChange}
          />
        </label>
        <input
          type='submit'
          name='submit'
          value='Search'
          className={styles.formBtn}
        />
      </form>
    </div>
  );
};

export default Form;
