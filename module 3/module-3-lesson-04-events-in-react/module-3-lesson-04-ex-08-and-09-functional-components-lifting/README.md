# Exercise 8

From the initial Form and InputText components,

- Add a third field to the form for the user to type her city.
- Observe the data that appears in the console when the user types in the form fields.

# Exercise 9

If you look at the function handleFormInput, you will see that it receives a single argument of type object called data that has the properties name and value.
We ask you to change the functions handleFormInput and handleKeyUp so that handleFormInput instead of receiving an argument receives:

- First argument: a string with the name of the modified input.
- Second argument: a string with the value of the modified input.

![]()

## Form.js
```javaScript
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
```

## InputText.js
```javaScript
import React from 'react';

const InputText = props => {

  const handleKeyUp = ev => {
    props.handleInput(props.name, ev.currentTarget.value);
  };

  return (
    <div>
      <label htmlFor={props.id}>
        {props.label}
      </label>
      <input
        id={props.id}
        type='text'
        name={props.name}
        city={props.city}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};
export default InputText;
```
