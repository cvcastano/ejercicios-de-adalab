import React from 'react';


const textareaHandler = ev => {
  const value = ev.target.value;
  if (value.includes('onion')) {
    alert('I hate onions');
  }
}


class OnionHater extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
    <textarea onKeyUp={textareaHandler}></textarea>);
  }
}


export default OnionHater;