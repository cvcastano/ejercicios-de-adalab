[Exercise 5](https://books.adalab.es/materiales-front-end-l/modulo-3-react/3_4_eventos_react#ejercicio-5)


![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-04-events-in-react/module-3-lesson-04-ex-05-cities/src/citiesCapture.gif)


# CitySelector.js
```javaScript
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
            'Sydney': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/1280px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg',
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




