[Exercise 4](https://books.adalab.es/materiales-front-end-l/modulo-3-react/3_4_eventos_react#ejercicio-4)


![]()

Destination.js
```javaScript
import React from 'react';
import CityImage from "./CityImage";


class Destination extends React.Component {
  constructor(props) {
    super(props);
    this.myDestination = "";
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler = ev => {
    alert (`Your destination is${ev.target.value}`);
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

export default Destination;
```
# CityImage.js
```javaScript
import React from 'react';
import "./App.css"


class CityImage extends React.Component {

    constructor(props) {
        super(props);
        this.cities = {
            'Buenos Aires': 'https://contactonews.co/storage/images/thumb-large-Obelisco-Buenos-Aires.jpg',
            'Prague': 'https://miro.medium.com/max/2400/0*p5ECoxVo6jonjbsI',
            'Sydney': 'https://dondealojarse.net/wp-content/uploads/2019/08/dondedormirsydney-1068x712.jpg',
            'Boston': 'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2014/09/21/1447/BOSTO-P156-Foggy-Boston-City.jpg/BOSTO-P156-Foggy-Boston-City.16x9.jpg',
            'Tokyo': 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002533/img/basic/a0002533_main.jpg?20210122155600&q=80&rw=750&rh=536'
        };
    }
    render() {
        return (
            <img className="pic" src={this.cities[this.props.city]} alt={this.props.city} />
        );
    }
}

export default CityImage;
```




