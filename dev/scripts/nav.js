import React from 'react';
import ReactDOM from 'react-dom';

class NavBar extends React.Component {
    render() {
        return (
            <section className="nav">
                <div className="wrapper">
                    <a href="http://giffiti.gaby.codes" className="logo">
                        <span className="g">G</span>
                        <span className="i">I</span>
                        <span className="f">F</span>
                        <span className="secondF">F</span>
                        <span className="secondI">I</span>
                        <span className="t">T</span>
                        <span className="thirdI">I</span>
                    </a>
                    <a href="https://twitter.com/intent/tweet?hashtags=GIFFITI&text=Gifs are great, amirite? Check out this app and play around with them!" target="_blank" className="twitter-share-button twitter">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                </div>
            </section>
        )
    }
}

export default NavBar;