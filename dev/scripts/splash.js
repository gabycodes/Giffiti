import React from 'react';
import ReactDOM from 'react-dom';

class SplashPage extends React.Component {
    constructor() {
        super();
        this.state = {
            nextPage: false
        };
        this.toggleClass = this.toggleClass.bind(this);
    }
    toggleClass() {
        const currentState = this.state.nextPage;
        this.setState({
            nextPage: !currentState
        });
    }
    // nextPage(event) {
    //     event.preventDefault();
    //     $(this.target).css({background:blue});
    // }
    render() {
        return (
            <section className={this.state.nextPage ? 'removePage splashPage' : 'splashPage'}>
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
                <button onClick={this.toggleClass}>Start</button>
                </div>
            </section>
        )
    }
}

export default SplashPage;