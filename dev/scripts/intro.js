import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './nav';

class Intro extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      formToShow: '',
      email: '',
      password: '',
      confirm: ''
    };
    this.formToShow = this.formToShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  }
  componentDidMount() {
    const dbRef = firebase.database().ref();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dbRef.on("value", (firebaseData) => {
          const gifArray = [];
          const gifData = firebaseData.val();
          // for (let gifKey in gifData) {
          //   gifData[gifKey].key = gifKey// We're adding a key property, in addition to name and item
          //   gifArray.push(gifData[gifKey])
          // }
        });
      }
      else {
        console.log("You are not signed in");
      }
    });// Closes AuthChanged
  }
  formToShow(e) {
		e.preventDefault();
		this.setState({
			formToShow: e.target.className
		})
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	signup(e) {
		e.preventDefault();
		if(this.state.password === this.state.confirm) {
			firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)// This method returns a promise
			.then((data) => {
        console.log(data);
        console.log(this.state.email);
			})
		}
	}
	login(e) {
		e.preventDefault();
		firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
		.then((data) => {
      console.log(data);
      console.log(this.state.email);
		})
	}

  render() {
    let loginForm = '';
    if(this.state.formToShow === 'signup') {
			loginForm = (
				<form onSubmit={this.signup} className="user-form">
					<label aria-hidden="true" htmlFor="email">Email: </label>
					<input type="email" name="email" placeholder="email" onChange={this.handleChange} />
					<label aria-hidden="true" htmlFor="password">Password: </label>
					<input type="password" name="password" placeholder="password" onChange={this.handleChange} />
					<label aria-hidden="true" htmlFor="confirm">Confirm Password:</label>
					<input type="password" name="confirm" placeholder="confirm password" onChange={this.handleChange} />
					<button>Submit</button>
				</form>
			);
		}
		else if(this.state.formToShow === "login") {
			loginForm = (
				<form onSubmit={this.login} className="user-form">
					<label aria-hidden="true" htmlFor="email">Email: </label>
          <input type="email" name="email" placeholder="email" onChange={this.handleChange}/>
					<label aria-hidden="true" htmlFor="password">Password: </label>
					<input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
					<button>Submit</button>
				</form>
			);
		}
    return (
      <section className="introPage">
        <NavBar />
        <div className="wrapper">
          <div className="content">
            <h2>How it works</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum soluta, dolor rem enim ut illum tempora assumenda? Fugit distinctio perferendis consequatur hic laboriosam iure! Temporibus ut iusto, corporis voluptates nisi magni quasi error dolorem eum perspiciatis maxime veniam, obcaecati voluptas voluptatibus veritatis molestias iste amet?</p>
            <div>
              <nav>
                <ul className="clearfix">
                  <li><a href="" className="signup" onClick={this.formToShow}>Sign Up</a></li>
                  <li><a href="" className="login" onClick={this.formToShow}>Log In</a></li>
                </ul>
              </nav>
            </div>
          {loginForm}
          </div> {/* closes .content */}
        </div> {/* closes .wrapper */}
        {/* <button className="enterSite">Continue</button> */}
      </section>
    )
  }
}

export default Intro;