import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './nav';
import PropTypes from 'prop-types';

class Intro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formToShow: '',
      email: '',
      password: '',
      confirm: '',
      nextPage: false
    };
    this.pageNumber = 2;
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
			firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
			.then((data) => {
        this.context.setIsAuth(true);
        this.context.setEmail(this.state.email);
        this.context.setCurrentPage(3);
			})
		}
	}
	login(e) {
		e.preventDefault();
		firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
		.then((data) => {
      this.context.setIsAuth(true);
      this.context.setEmail(this.state.email);
      this.context.setCurrentPage(3);
		})
  }

  render() {
    let loginForm = '';
    if(this.state.formToShow === 'signup') {
			loginForm = (
				<form onSubmit={this.signup} className="user-form signup">
					<label aria-hidden="true" htmlFor="email">Email: </label>
					<input type="email" name="email" placeholder="email" onChange={this.handleChange} />
					<label aria-hidden="true" htmlFor="password">Password: </label>
					<input type="password" name="password" placeholder="password" onChange={this.handleChange} />
					<label aria-hidden="true" htmlFor="confirm">Confirm Password:</label>
					<input type="password" name="confirm" placeholder="confirm password" onChange={this.handleChange} />
					<button className="submit" >Submit</button>
				</form>
			);
		}
		else if(this.state.formToShow === "login") {
			loginForm = (
				<form onSubmit={this.login} className="user-form login">
					<label aria-hidden="true" htmlFor="email">Email: </label>
          <input type="email" name="email" placeholder="email" onChange={this.handleChange}/>
					<label aria-hidden="true" htmlFor="password">Password: </label>
					<input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
					<button className="submit" >Submit</button>
				</form>
			);
		}
    return this.context.currentPage === this.pageNumber ? (
      <section className={"introPage"}>
        <NavBar />
        <div className="wrapper">
          <div className="content">
            <h2>How it works</h2>
            <p>Gifs are awesome, amirite? GIFFITI is an interactive gif collage where you can save all your favourite gifs in one board, or come together with your friends and make a themed board.</p>
            <p>You're about to view HackerYou Cohort 16's favourite gifs and add your own to the collection!</p>
            <p>*This site displays many gifs at once and demands a fair amount of data... Something to keep in mind if you're on mobile!</p>
            <div>
              <nav>
                <ul className="clearfix">
                  <li><button href="" className="signup" onClick={this.formToShow}>Sign Up</button></li>
                  <li><button href="" className="login" onClick={this.formToShow}>Log In</button></li>
                </ul>
              </nav>
            </div>
          {loginForm}
          </div> {/* closes .content */}
        </div> {/* closes .wrapper */}
      </section>
    ) : null
  }
}

Intro.contextTypes = {
  setIsAuth: PropTypes.func,
  setEmail: PropTypes.func,
  isAuth: PropTypes.bool,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func
}

export default Intro;