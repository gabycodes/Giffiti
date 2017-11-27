import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchGifs from './searchGifs';
import SplashPage from './splash';
import NavBar from './nav';
import Intro from './intro';
import PickCanvas from './pickCanvas';
import EditCanvas from './editCanvas';

const config = {
  apiKey: "AIzaSyCZAb1qh4-o-AKtFBeelJDRaxTo3Kiw-lw",
  authDomain: "giffiti-8d947.firebaseapp.com",
  databaseURL: "https://giffiti-8d947.firebaseio.com",
  projectId: "giffiti-8d947",
  storageBucket: "giffiti-8d947.appspot.com",
  messagingSenderId: "143127361924"
};
firebase.initializeApp(config);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gaby: 'gabyyyy',
      userGif: ''
    }
    this.updateUserGif = this.updateUserGif.bind(this);
  }
  updateUserGif(event) {
    event.preventDefault();
    this.setState({
      userGif: event.target.src
    }) 
    console.log(this.state.userGif);
  }
    render() {
      return (
        <div className="appHolder">
          <SplashPage />
          <Intro />
          {/* <PickCanvas /> */}
          <SearchGifs userGif={this.updateUserGif} />
          <EditCanvas userChosenGif={this.state.userGif} userEmail={this.state.email}/>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
