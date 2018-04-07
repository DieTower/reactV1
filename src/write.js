import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css';
import './css/style.css';

export default class Writer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: props.name}
        this.name = this.state.name;
    }

    changeWord(element) {
        this.setState({name: element.target.value});
    }

    render() {
        return (
            <div className="writer">
                <input type="text" className="theInput" onChange={(element) => this.changeWord(element)} />
                <h2 className="theAsnwer">Your name is {this.state.name}</h2>
            </div>
        );
    }

}