import React from 'react';

const selectHandler = ev => {
        alert (`Your destination is${ev.target.value}`);
    }


class Destination extends React.Component {
  render() {

    return (
        <select name="destination" id="destination" onChange={selectHandler}>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokyo">Tokyo</option>
        </select>
    );
  }
}

export default Destination;