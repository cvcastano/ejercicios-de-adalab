import React from 'react';
import CityImage from "./CityImage";


class CitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.myDestination = "";
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler = ev => {
    this.myDestination = ev.target.value;
    this.forceUpdate();
}
  
  render() {

    return (

        <div>
          <select name="destination" id="destination" onChange={this.onChangeHandler}>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Sydney">Sydney</option>
            <option value="Prague">Prague</option>
            <option value="Boston">Boston</option>
            <option value="Tokyo"> Tokyo</option>
          </select>
          <CityImage city={this.myDestination}/>
        </div>

    );
  }
}

export default CitySelector;