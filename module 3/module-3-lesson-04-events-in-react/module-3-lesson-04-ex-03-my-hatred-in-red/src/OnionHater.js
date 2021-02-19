import React from 'react';


const page = document.querySelector('.page');

class OnionHater extends React.Component {

  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.isHating = false
  }

  handleInput(ev){
    const value = ev.target.value.toLowerCase();
    
    // console.log(value);

    if (value.includes('onion')) {
      this.isHating = true;
      page.classList.add('hatred');
    }
    else {
      this.isHating = false;
      page.classList.remove('hatred');
    }

  }
  render() {

    return (
      <textarea cols="30" rows="10" className="textarea" onKeyUp={this.handleInput}></textarea>
    );
  }
}

export default OnionHater;