import { useState } from 'react';

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
    <div className='Form'>
      <h1>Search for your favorite movie</h1>
      <form
        onSubmit={(evt) => {
          props.onSubmit(evt, values.apiKey, values.title);
          setValues((prevValues) => ({ ...prevValues, title: '' }));
        }}
      >
        <label htmlFor='apiKey'>
          API Key:{' '}
          <input
            type='text'
            placeholder='Api Key'
            name='apiKey'
            value={values.apiKey}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='title'>
          Movie Title:{' '}
          <input
            type='text'
            placeholder='Movie Title'
            name='title'
            value={values.title}
            onChange={handleChange}
          />
        </label>
        <input
          type='submit'
          name='submit'
          value='Search'
          className='form-btn'
        />
      </form>
    </div>
  );
};

export default Form;
