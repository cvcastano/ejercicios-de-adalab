import React from 'react';


  class Palette extends React.Component {
      constructor(props) {
          super(props);
      }

      render() {
          const {props} = this;

          const colors = props.colors;

          const renderColors = () => colors.map((color, index) => <li key={index} style={{backgroundColor: `#${color}`}}></li>);

          return(
              <ul>
                  {renderColors()}
              </ul>
          )
      }
  }

export default Palette;