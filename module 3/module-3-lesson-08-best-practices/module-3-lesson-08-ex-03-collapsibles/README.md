[Exercise 03](https://books.adalab.es/materiales-front-end-l/modulo-3-react/3_8_buenas_practicas#ejercicio-3)

![]()

# Collapsibles.js 
```javascript
import React from 'react';
import Palette from './Palette';
import palettes from './palettes.json';

class Collapsibles extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: '' };

        this.setOpen = this.setOpen.bind(this);
        this.renderData = this.renderData.bind(this);
        this.getData = this.getData.bind(this);
    }

    renderData(data) {
        return (
            <li key={data.name}>
                <div id={data.name} onClick={this.setOpen}>
                    <h2>{data.name}</h2>
                    <span><i className="fas fa-arrows-alt-v"></i></span>
                </div>
                <div className={`${this.state.open === data.name ? '' : ' hidden'}`}>
                    <Palette
                        colors={data.colors}
                    />
                    <p>{data.from}</p>
                </div>
            </li>
        )
    }

    getData() {
        const renderedData = palettes.palettes
            .map(palette => this.renderData(palette));

        return renderedData;
    }

    setOpen(ev) {
        if (this.state.open === ev.target.id) {
            this.setState({
                open: ''
            })
        } else {
            this.setState({
                open: ev.target.id
            })
        }
    }

    render() {
        return (
            <ul className="palette">
                {this.getData()}
            </ul>

        )
    }
}


export default Collapsibles;

```
# Palette.js 
```javascript
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
```
