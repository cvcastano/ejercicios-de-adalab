import React from 'react';
import InputText from './InputText';

const handleFormInput = data => {
  console.log(data);
};

const Form = () => {
  return (
    <form className="App">
      <InputText
        id="name"
        label='Write your name: '
        name='name'
        handleInput={handleFormInput}
      />
      <InputText
        id="email"
        label='Write your email: '
        name='email'
        handleInput={handleFormInput}
      />
    </form>
  );
};

export default Form;