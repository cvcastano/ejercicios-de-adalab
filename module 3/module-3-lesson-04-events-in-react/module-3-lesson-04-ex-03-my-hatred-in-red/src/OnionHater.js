import React from 'react';



class OnionHater extends React.Component {
  constructor(props) {
    super(props);
     this.isHating = false
     this.handleInput = this.handleInput.bind(this);
   
  }
  
  handleInput(ev){
    const page = document.querySelector('.page');
    this.forceUpdate()
    const value = ev.target.value.toLowerCase();
    if (value.includes ('onion')) {
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
      <textarea name="" id="" cols="30" rows="10" onChange={this.handleInput}></textarea>
  );
}
}


export default OnionHater;
