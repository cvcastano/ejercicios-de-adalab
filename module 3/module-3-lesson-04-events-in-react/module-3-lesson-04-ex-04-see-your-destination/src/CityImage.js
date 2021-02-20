import React from 'react';



class CityImage extends React.Component {

    constructor(props) {
        super(props);
        this.cities = {
            'BuenosAires': 'https://pixabay.com/images/id-907344/',
            'Prague': 'https://pixabay.com/images/id-3010407/',
            'Sydney': 'https://pixabay.com/images/id-363244/',
            'Boston': 'https://pixabay.com/images/id-3690818/',
            'Tokyo': 'https://pixabay.com/images/id-923000/'
        }
    }

    render() {

        return (
            <img src="{this.cities.props}" alt="" />
        );
    }
}

export default CityImage;
