import React from 'react';
import CityImage from "./CityImage";

const selectHandler = ev => {
        alert (`Your destination is${ev.target.value}`);
        this.cityImage = ev.target.value;
        this.forceUpdate();
    }


class Destination extends React.Component {
  constructor(props) {
    super(props);
    this.myDestination = "";
  
  }
  
  render() {

    return (

        <div>
          <select name="destination" id="destination" onChange={this.selectHandler}>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Sydney">Sydney</option>
            <option value="Prague">Prague</option>
            <option value="Boston">Boston</option>
            <option value="Tokyo"> Tokyo</option>
          </select>
          <cityImage city='Tokyo'/>
        </div>

    );
  }
}

export default Destination;