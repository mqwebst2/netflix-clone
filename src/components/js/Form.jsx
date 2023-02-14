import React from 'react';

let Form = (props) => {
  return (
    <div className='Form'>
      <h1>Search for your favorite movie</h1>
      <form onSubmit={props.onSubmit}>
        <label htmlFor='apiKey'>
          API Key:{' '}
          <input
            type='text'
            placeholder='Api Key'
            name='apiKey'
            value={props.apiKey}
            onChange={props.onChange}
          />
        </label>
        <label htmlFor='title'>
          Movie Title:{' '}
          <input
            type='text'
            placeholder='Movie Title'
            name='title'
            value={props.title}
            onChange={props.onChange}
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
