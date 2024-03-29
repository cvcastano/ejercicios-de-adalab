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