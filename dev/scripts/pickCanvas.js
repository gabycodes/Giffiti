import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './nav';

class PickCanvas extends React.Component {
    render() {
        return (
            <section className="pickCanvasPage">
                <NavBar />
                <h2>Choose a canvas</h2>
                <a href="#" className="specialCanvas">
                    <img src="" alt="" />
                    <p>HY Cohort 16</p>
                </a>
                <a href="#" className="newCanvas">
                    <img src="" alt="" />
                    <p>So fresh and so clean, clean</p>
                </a>
            </section>
        )
    }
}

export default PickCanvas;