import React from 'react';
import ReactDOM from 'react-dom';

class SplashPage extends React.Component {
    render() {
        return (
            <section className="splashPage">
                <div className="content wrapper">  
                <h1>
                    <span className="g">G</span>
                    <span className="i">I</span>
                    <span className="f">F</span>
                    <span className="secondF">F</span>
                    <span className="secondI">I</span>
                    <span className="t">T</span>
                    <span className="thirdI">I</span>
                </h1>
                <button className="enterSite">Start</button>
                </div>
            </section>
        )
    }
}

export default SplashPage;