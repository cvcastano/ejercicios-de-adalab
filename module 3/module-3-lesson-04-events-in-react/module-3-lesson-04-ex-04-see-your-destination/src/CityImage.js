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
