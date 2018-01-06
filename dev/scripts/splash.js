import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class SplashPage extends React.Component {
    constructor() {
        super();
        this.state = {
            nextPage: false
        };
        this.pageNumber = 1;
    }
    render() {
        // console.log(this.context.currentPage, this.pageNumber);

        return this.context.currentPage === this.pageNumber ? (
            <section className={"splashPage"}>
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
                <button onClick={ () => {
                    this.context.setCurrentPage(2);
                }}>Start</button>
                </div>
            </section>
        ) : null
    }
}

SplashPage.contextTypes = {
    currentPage: PropTypes.number,
    setCurrentPage: PropTypes.func
}

export default SplashPage;