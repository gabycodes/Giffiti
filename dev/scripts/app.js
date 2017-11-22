import React from 'react';
import ReactDOM from 'react-dom';
const donuts = ['Old-Fashioned Plain', 'Maple Dip', 'Raspberry'];
import Donut from './donut';

class App extends React.Component {
    render() {
      return (
        <div>
          {donuts.map((donut) => {
            return (
            <Donut donutName={donut} /> // Components must start with a capital
          )
          })}
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
