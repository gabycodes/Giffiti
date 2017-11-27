import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './nav';

class EditCanvas extends React.Component {

    constructor(props) {
        super(props);
        this.saveGifToCanvas = this.saveGifToCanvas.bind(this);
        this.addToArray = this.addToArray.bind(this);
        this.state = {
            gifArray : []
        }
    }
    componentDidMount() {
        const dbRef = firebase.database().ref();
        let savedGifObject = {};

        dbRef.on("value", (data) => {
            savedGifObject = data.val();
            this.addToArray(savedGifObject);
        })
    }
    addToArray(savedGifObject) {
        let savedArray = [];
        for (const prop in savedGifObject) {
            savedArray.push(savedGifObject[prop]);
        }
        this.setState({
            gifArray: savedArray
        })
    }
    saveGifToCanvas() {
        const userChosenGif = this.props.userChosenGif;

        const dbRef = firebase.database().ref();
        dbRef.push(userChosenGif);
    }

    render() {
        return (
            <section className="editCanvas">
                <NavBar />
                <div className="canvas wrapper">
                    {this.state.gifArray.map((item, i) => {
                        return <img src={this.state.gifArray[i]} key={item.key} className="userGif" />
                    })}
                </div>
                <button className="saveCanvas" onClick={this.saveGifToCanvas}>Add my Gif!</button>
            </section>
        )
    }
}

export default EditCanvas;