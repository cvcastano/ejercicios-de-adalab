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