import React from 'react';

class Donut extends React.Component {
    render() {
        return (
            <h2>{this.props.donutName}</h2>
        )
    }
}

export default Donut;

//Why default? Because we're only exporting one thing. We can only ever have on default thing per module

// This file contains a component, but the whole file is now a module too since we've added the "export" word