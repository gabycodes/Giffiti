import React from 'react';
import NavBar from './nav';
import axios from 'axios';

class SearchGifs extends React.Component {
  constructor(props) {
    super();
    this.state = {// These declare the states of things that will change eventually
      searchQuery: '',
      gifArray: []// An empty array that will be populated later
      // gif: this.props.gif
    }
    this.apiRequest = this.apiRequest.bind(this); // These make sure our custom functions
    this.handleSubmit = this.handleSubmit.bind(this);// have the right "this" value
    this.handleInput = this.handleInput.bind(this);
    // this.callParentFunction = this.callParentFunction.bind(this);
  }
  handleInput(event) {// When handleInput is called,
    // console.log(event.target);
    this.setState({// the state of something is going to change.
      searchQuery: event.target.value// The searchQuery becomes the value of the thing that was touched/triggered the event
    })
  }
  handleSubmit(event) {// When handleSubmit is called,
    event.preventDefault();// prevent it's default action
    this.apiRequest();// call searchGifs() method
  }  

  apiRequest() {
    const apiKey = "mmsHSa9HdKPB0e9TU72QRcTK6H22ugWE";

    axios({
      method: 'get',
      url: "https://api.giphy.com/v1/gifs/search",
      params: {
        api_key: apiKey,
        format: "json",
        q: this.state.searchQuery,
        limit: 4
      }
    })
      .then((response) => {
        // console.log(response);
        this.setState({// The state of something is going to change
          gifArray: response.data.data// Here we populate our empty array with the array we get from our api
          // gifArray becomes "response.data.data" 
          // ("data.data" are not variables, they are properties in our response array)
        })
      });
  }
  render() {
    const gifs = this.state.gifArray.map((gif, index) => {// We're making a new array out of our gifArray
      return (
        <a href="" onClick={this.props.userGif} key={index}>
          <img src={gif.images.original.url} alt="" />
        </a>
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

export default SearchGifs;