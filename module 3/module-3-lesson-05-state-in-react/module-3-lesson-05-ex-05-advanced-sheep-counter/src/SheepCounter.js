import React from 'react';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      const newCounter = prevState.counter + 1;
      return {
        counter: newCounter,
      }
    })

    const img = document.createElement("img")
    img.setAttribute('src', "http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png");
    document.getElementById('flock').appendChild(img);
  };

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>SheepCounter</button><br />
        <div id="flock"></div>
      </>
    );
  }
}
export default SheepCounter;
