import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './nav';
import PropTypes from 'prop-types';

class EditCanvas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gifArray : []
        }
        this.pageNumber = 4;
        this.saveGifToCanvas = this.saveGifToCanvas.bind(this);
        this.addToArray = this.addToArray.bind(this);
        this.removePeriod = this.removePeriod.bind(this);
    }
    componentDidMount() {
        // let email = this.removePeriod(this.context.userEmail);
        const dbRef = firebase.database().ref();
        let savedGifObject = {};
        dbRef.on("value", (data) => {
            savedGifObject = data.val();
            this.addToArray(savedGifObject);
            // console.log(savedGifObject);
        })
    }
    addToArray(savedGifObject) {
        let savedArray = [];
        let currentUsersGifs = [];
        let allGifs = [];
        for (const prop in savedGifObject) {
            // console.log(prop);
            if (savedGifObject[prop].constructor === Object) {
                savedArray.push(savedGifObject[prop]);
            }
        }
        
        console.log(savedGifObject);
        if (this.context.currentPage === 4) {
            savedArray.map((item, i) => {
                if (savedArray[i].userEmail === this.context.userEmail) {
                    currentUsersGifs.push(savedArray[i]);
                }
            })
        }
        this.setState({
            gifArray: savedArray
        })
    }
    removePeriod(email) {
        return email.replace(/[.]/g, "");
    }
    saveGifToCanvas() {
        const userChosenGif = this.props.userChosenGif;
        const userName = this.removePeriod(this.context.userEmail);

        const dbRef = firebase.database().ref();
        // console.log(`dbRef = ${dbRef}`);
        
        dbRef.push({
            url: userChosenGif,
            public: true,
            userEmail: this.context.userEmail,
            user: userName
        });
    }

    render() {
        // console.log(this.state.gifArray);
        // console.log(this.state.gifArray[0]);
            // console.log(this.state.gifArray[i]);
        const gifs = this.state.gifArray.length > 0 ?this.state.gifArray.map((item, i) => {
            // console.log(this.state.gifArray[i].userEmail);
            return <img src={this.state.gifArray[i].url} key={i} className="userGif" />
        }) : <p>Gifs are not available!</p>

        return this.context.currentPage === this.pageNumber ? (
            <section className="editCanvas">
                <NavBar />
                <div className="canvas wrapper">
                    {gifs}
                </div>
                <button className="saveCanvas" onClick={this.saveGifToCanvas}>Add my Gif!</button>
            </section>
        ) : null
    }
}

EditCanvas.contextTypes = {
    isAuth: PropTypes.bool,
    userEmail: PropTypes.string,
    currentPage: PropTypes.number,
    setCurrentPage: PropTypes.func
}

export default EditCanvas;