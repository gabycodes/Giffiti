import React from 'react';
import ReactDOM from 'react-dom';

class NavBar extends React.Component {
    render() {
        return (
            <section className="nav">
                <div className="wrapper">
                    <a href="#" className="logo">
                        <span className="g">G</span>
                        <span className="i">I</span>
                        <span className="f">F</span>
                        <span className="secondF">F</span>
                        <span className="secondI">I</span>
                        <span className="t">T</span>
                        <span className="thirdI">I</span>
                    </a>
                    <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                </div>
            </section>
        )
    }
}

export default NavBar;