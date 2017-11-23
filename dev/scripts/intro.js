import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './nav';

class Intro extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="introPage">
        <NavBar />
        <h2>{this.props.text}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum soluta, dolor rem enim ut illum tempora assumenda? Fugit distinctio perferendis consequatur hic laboriosam iure! Temporibus ut iusto, corporis voluptates nisi magni quasi error dolorem eum perspiciatis maxime veniam, obcaecati voluptas voluptatibus veritatis molestias iste amet?</p>
        <button className="enterSite">Continue</button>
      </section>
    )
  }
}

export default Intro;