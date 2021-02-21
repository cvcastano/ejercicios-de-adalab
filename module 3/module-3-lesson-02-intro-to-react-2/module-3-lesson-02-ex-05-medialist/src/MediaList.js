import React from 'react';
import MediaCard from './MediaCard';
import logo from './logo.svg';

const imgURL = 'https://avatars.githubusercontent.com/u/73801003?s=460&u=1e221d0595b5b6de862687a1fcfdf3e2a8c814ba&v=4';
const imgURL2 = 'https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/1026048_10152295498257565_1092939349_o.jpg?_nc_cat=111&ccb=3&_nc_sid=19026a&_nc_ohc=-s4NJyuFnUUAX_SSX4l&_nc_ht=scontent-mad1-1.xx&oh=1dedff7fd5d502e95f2fe1230d3946ea&oe=6057071C';

class MediaList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<section>
            <h2></h2>
            <ul>
                <MediaCard img={imgURL} name='Perica of the sticks' date='21st of February, 2021' text='The fool with her drum and sometimes with the bugle imitated the town crier who would try to get rid of her to the laughter and delight of everyone.' likes='14'/>
                <MediaCard img={logo} name='React project' date='17th of February, 2021' text='How I would love to have a week now to review content and reinforce learning.' likes='5'/>
                <MediaCard img={imgURL2} name="The volcano's madwoman" date='14th of July, 2013' text="Once upon a time, two very close friends went to Reunion Island and, after descending the Game of Thrones wall in complete darkness, followed a trail of toilet paper to the top of a volcano. One of them went crazy, we don't know if it was because of the constant falls she suffered along the way or because of the breathtaking cold at the top." likes='20'/>
            </ul>
        </section>);

    }

}

export default MediaList;
