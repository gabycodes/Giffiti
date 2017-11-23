import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './nav';

class EditCanvas extends React.Component {
    render() {
        return (
            <section className="editCanvas">
                <NavBar />
                <h2>Add your gif</h2>

            </section>
        )
    }
}

export default EditCanvas;