import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GetGifs from './getGifs';
// import firebase from 'firebase';
// import { connect } from 'react-firebase';

// firebase.initializeApp({
//   gifArraybaseURL: 'https://giffiti-8d947.firebaseio.com'
// })

class App extends React.Component {
    render() {
    
      return (
        <div className="appHolder">
          <SplashPage />
          <Intro />
          <PickCanvas />
          <PickGif />
          <EditCanvas />

        </div>
      )
    }
}

class SplashPage extends React.Component {
  render() {
    return (
      <section className="splashPage">
        <h1>GIFFITI</h1>
        <button className="enterSite" >Start</button>
      </section>
    )
  }
}
class NavBar extends React.Component {
  render() {
    return (
      <section className="nav wrapper">
        <a href="#">GIFFITI</a>
        <a href="#">Twitter</a>
      </section>
    )
  }
}
class Intro extends React.Component {
  render() {
    return (
      <section className="introPage">
        <NavBar />
        <h2>How it works</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum soluta, dolor rem enim ut illum tempora assumenda? Fugit distinctio perferendis consequatur hic laboriosam iure! Temporibus ut iusto, corporis voluptates nisi magni quasi error dolorem eum perspiciatis maxime veniam, obcaecati voluptas voluptatibus veritatis molestias iste amet?</p>
        <button className="enterSite">Continue</button>
      </section>
    )
  }
}
class PickCanvas extends React.Component {
  render() {
    return (
      <section className="pickCanvasPage">
        <NavBar />
        <h2>Choose a canvas</h2>
        <a href="#" className="specialCanvas">
          <img src="" alt=""/>
          <p>HY Cohort 16</p>
        </a>
        <a href="#" className="newCanvas">
          <img src="" alt=""/>
          <p>So fresh and so clean, clean</p>
        </a>
      </section>
    )
  }
}
class PickGif extends React.Component {
  constructor() {
    super();
    this.state = {// These declare the states of things that will change eventually
      searchQuery: '',
      gifArray: []
    }
    this.searchGifs = this.searchGifs.bind(this); // These make sure our custom functions
    this.handleSubmit = this.handleSubmit.bind(this);// have the right "this" value
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {// When handleInput is called,
    this.setState({// the state of something is going to change.
      searchQuery: event.target.value// The searchQuery becomes the value of the thing that was touched/triggered the event
    })
  }
  handleSubmit(event) {// When handleSubmit is called,
    event.preventDefault();// prevent it's default action
    this.searchGifs();// call searchGifs() method
  }
  searchGifs() {
    const apiKey = "mmsHSa9HdKPB0e9TU72QRcTK6H22ugWE";

    axios({
      method: 'get',
      url: "https://api.giphy.com/v1/gifs/search",
      params: {
        api_key: apiKey,
        format: "json",
        q: "puppies",
        limit: 10
      }
    })
      .then((response) => {
        console.log(response);
        this.setState({// The state of something is going to change
          gifArray: response.data.data// gifArray becomes "response.data.data" 
          // ("data.data" are not variables, they are properties in our response array)
        })
      });
  }
  render() {
    const gifs = this.state.gifArray.map((gif, index) => {
      return (
        <Gif src={gif.images.original.url} key={index}/>
      )
    })
    return (
      <section className="pickGif">
        <NavBar />
        <h2>Choose a sweet gif.</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="gifSearch"></label>
          <input type="search" name="gifSearch" onChange={this.handleInput} value={this.state.searchQuery}/>
          <button type="submit">Search</button>
        </form>

        <div className="gifHolder">{gifs}</div>
      </section>
    )
  }
}

class Gif extends React.Component {
  constructor() {
    super();
    
    this.saveGif = this.saveGif.bind(this);
  }

  saveGif(event) {
    console.log(this.props.src);
    event.preventDefault();

  }
  render() {
    return (
      <a href="" onClick={this.saveGif}>
        <img src={this.props.src} alt="" />
      </a>
      
    )
  }
}

class EditCanvas extends React.Component {
  render() {
    return (
      <section className="editCanvas">
        <NavBar />
        <h2>Add your gif</h2>

      </section>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
