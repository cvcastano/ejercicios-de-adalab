import React from 'react';

const textareaHandler = ev => {
    const value = ev.target.value;
    if (value.includes('onion')) {
        alert ('I hate onions');
    }
}

class OnionHater extends React.Component {
  render() {

    return (
        <textarea name="" id="" cols="30" rows="10" onKeyUp={textareaHandler}>Write on me:</textarea>
    );
  }
}

export default OnionHater;