import React from 'react';
// import img from './logo.svg';


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