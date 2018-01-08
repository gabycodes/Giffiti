import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
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
      userGif: '',
      userEmail: '',
      isAuth: false,
      currentPage: 1
    }
    this.updateUserGif = this.updateUserGif.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setIsAuth = this.setIsAuth.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);
  }
  setCurrentPage(int) {
    this.setState({
      currentPage: int
    })
  }
  setEmail(email) {
    this.setState({
      userEmail: email
    })
  }
  setIsAuth(bool) {
    this.setState({
      isAuth: bool
    })
  }
  getChildContext() {
    return {
      setEmail: this.setEmail,
      setIsAuth: this.setIsAuth,
      setCurrentPage: this.setCurrentPage,
      userEmail: this.state.userEmail,
      isAuth: this.state.isAuth,
      currentPage: this.state.currentPage,
    }
  }
  updateUserGif(event) {
    event.preventDefault();
    this.setState({
      userGif: event.target.src
    }) 
  }
    render() {
      return (
        <div className="appHolder">
          <SplashPage />
          <Intro />
          <SearchGifs userGif={this.updateUserGif} />
          <EditCanvas userChosenGif={this.state.userGif} userEmail={this.state.email}/>
        </div>
      )
    }
}

App.childContextTypes = {
  setIsAuth: PropTypes.func,
  setEmail: PropTypes.func,
  setCurrentPage: PropTypes.func,
  userEmail: PropTypes.string,
  isAuth: PropTypes.bool,
  currentPage: PropTypes.number
}

ReactDOM.render(<App />, document.getElementById('app'));
