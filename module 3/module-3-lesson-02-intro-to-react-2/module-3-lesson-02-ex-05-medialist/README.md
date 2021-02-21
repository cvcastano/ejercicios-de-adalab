[Exercise 5](https://books.adalab.es/materiales-front-end-l/modulo-3-react/3_2_intro_react_2#ejercicio-5)

![]()
# MediaList.js
```javaScript
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
```
# MediaCard.js
```javaScript
import React from 'react';

class MediaCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <li className="card">
      <header className="header">
        <img src={this.props.img} className="img" alt="profile-image" />
        <div className="header-text">
          <h4 className="name">{this.props.name}</h4>
          <h5 className="date">{this.props.date}</h5>
        </div>
      </header>
      <main className="main">
        <p className="main-text">
          {this.props.text}
        </p>
      </main>
      <footer className="footer">
        <a className="read-more">Read-more...</a>
        <span className="likes">{this.props.likes} <i className="far fa-heart"></i></span>
      </footer>
    </li>
    );
  }
}
export default MediaCard;
```

# App.js 
```javascript
import React from "react";
import MediaList from './MediaList';
import './App.scss';

const App = () => {
  return (
    <MediaList />
  );
}
export default App;
```
# index.js
```javaScript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
# App.scss
```scss
* {
  box-sizing: border-box;
  margin: 0;
}
.App {
  background-color: #e4e4e4;
  padding: 20px;
}
.card {
  background-color: white;
  box-shadow: 1px 1px 10px rgb(119, 113, 113);
  padding: 20px;
  width: 300px;
}
.header {
  display: flex;
}
.img {
  width: 40px;
  border-radius: 20px;
}
.logo {
  height: 40px;
  pointer-events: none;
}
@media (prefers-reduced-motion: no-preference) {
  .logo {
    animation: logo-spin infinite 20s linear;
  }
}
@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.header-text {
  height: 40px;
  padding-left: 10px;
}
.name {
  font-weight: 600;
}
.date {
  font-weight: 400;
}
.main {
  padding: 10px 0 20px;
}
.footer {
  display: flex;
  justify-content: space-between;
}
.read-more {
  color: grey;
}
.fa-heart {
  color: red;
}
li {
  list-style: none;
  margin: 10px;
}

```
