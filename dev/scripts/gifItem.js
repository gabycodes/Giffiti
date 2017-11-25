import React from 'react';

class GifItem extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <img src={this.props.src} alt="" className="gif-item"/>
        )
    }
}
    export default GifItem;