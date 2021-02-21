[Exercise 3](https://books.adalab.es/materiales-front-end-l/modulo-3-react/3_2_intro_react_2#ejercicio-3)

![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-02-intro-to-react-2/module-3-lesson-02-ex-03-class-to-functional/src/render.png)

# MediaCard.js
```javaScript
import React from 'react';

const MediaCard = (props) => {

    return (
    <div className="card">
      <header className="header">
        <img src={props.img} className="img" alt="profile-image" />
        <div className="header-text">
          <h4 className="name">{props.name}</h4>
          <h5 className="date">{props.date}</h5>
        </div>
      </header>
      <main className="main">
        <p className="main-text">
          {props.text}
        </p>
      </main>
      <footer className="footer">
        <a className="read-more">Read-more...</a>
        <span className="likes">{props.likes} <i className="far fa-heart"></i></span>
      </footer>
    </div>
    );
  }
export default MediaCard;
```

# App.js 
```javascript
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
```
