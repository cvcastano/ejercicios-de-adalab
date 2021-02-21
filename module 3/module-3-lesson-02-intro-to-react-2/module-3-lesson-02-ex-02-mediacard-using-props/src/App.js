import React from "react";
import MediaCard from './MediaCard';
import './App.scss';

const imgURL= 'https://avatars.githubusercontent.com/u/73801003?s=460&u=1e221d0595b5b6de862687a1fcfdf3e2a8c814ba&v=4';


const App = () => {
    return (
      <div className="App">
      <MediaCard 
      name='Perica de los Palotes' 
      date='21th of February, 2021'
      img= {imgURL}
      text='La tonta con su tambor y a veces con el cornetín imitaba al pregonero que trataría de desembarazarse de ella ante la risa y el regocijo de todos.'
      likes='1234'
      />
      </div>
    );
}

export default App;
