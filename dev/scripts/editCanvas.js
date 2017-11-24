import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './nav';

class EditCanvas extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props.userChosenGif);
    }
    render() {
        return (
            <section className="editCanvas">
                <NavBar />
                <h2>Add your gif</h2>
                { this.props.userChosenGif ? <p>something</p> : ''}
            </section>
        )
    }
}

export default EditCanvas;