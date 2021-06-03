import React from 'react';
import InputText from './InputText';

const handleFormInput = (name, value) => {
  console.log(name, value);
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
      <InputText
        id="city"
        label='Write your city: '
        name='city'
        handleInput={handleFormInput}
      />
    </form>
  );
};

export default Form;