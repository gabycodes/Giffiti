import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './nav';

class EditCanvas extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props.userChosenGif);
        this.saveGifToCanvas = this.saveGifToCanvas.bind(this);
    }
    componentDidMount() {
        

    }
    saveGifToCanvas() {
        console.log("saving gif to canvas...");
        const userChosenGif = this.props.userChosenGif;
        // const gifHolder = {img.userGif};

        const dbRef = firebase.database().ref();
        dbRef.push(userChosenGif);
    }

    render() {
        return (
            <section className="editCanvas">
                <NavBar />
                <h2>Add your gif</h2>
                <div className="canvas">
                    { this.props.userChosenGif ? <img src={this.props.userChosenGif} className="userGif"></img> : ''}
                </div>
                <button className="saveCanvas" onClick={this.saveGifToCanvas}>Save!</button>
            </section>
        )
    }
}

export default EditCanvas;