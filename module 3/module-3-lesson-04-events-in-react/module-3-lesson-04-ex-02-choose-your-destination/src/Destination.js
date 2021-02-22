import React from 'react';


function selectHandler (ev) {
  alert(`Your destination is ${ev.target.value}`);
} 

class Destination extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <select name="select" onChange={selectHandler}>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sydney" selected>Sydney</option>
        <option value="Prague">Prague</option>
        <option value="Boston">Boston</option>
        <option value="Tokio">Tokio</option>
      </select>
    )
  }
}

export default Destination;