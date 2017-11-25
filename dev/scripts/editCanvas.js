import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './nav';

class EditCanvas extends React.Component {

    constructor(props) {
        super(props);

        console.log(this.props.userChosenGif);
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
            // console.log(data.val());
            savedGifObject = data.val();
            this.addToArray(savedGifObject);
        })

    }
    addToArray(savedGifObject) {
        let savedArray = [];
        console.log('saved', savedGifObject)
        for (const prop in savedGifObject) {

            savedArray.push(savedGifObject[prop]);
            // console.log(this.state.gifArray);
        }
        this.setState({
            gifArray: savedArray
        })
    }
    saveGifToCanvas() {
        // this.addToArray(savedGifObject);
        console.log("saving gif to canvas...");
        const userChosenGif = this.props.userChosenGif;

        const dbRef = firebase.database().ref();
        dbRef.push(userChosenGif);
    }

    render() {
        // console.log(this.state.gifArray);
        return (
            <section className="editCanvas">
                <NavBar />
                <h2>Add your gif</h2>
                <div className="canvas">
                    {this.state.gifArray.map((item, i) => {
                        console.log("Adding gifs to canvas...");
                        return <img src={this.state.gifArray[i]} key={item.key} className="userGif" />
                        // return <GifItem data={item} key={item.key} src={userChosenGif} />
                    })}
                    
                </div>
                <button className="saveCanvas" onClick={this.saveGifToCanvas}>Save!</button>
            </section>
        )
    }
}

export default EditCanvas;