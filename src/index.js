import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css';
import './css/style.css';
import Write from './write.js';

class Main extends React.Component {

    render() {
        return (
            <div className="main">
                <div className="container">
                    <h1>Hello World</h1>
                    <Write name="Friend"/>
                </div>
            </div>
        );
    }

}

let app = document.getElementById('root');

ReactDOM.render(<Main/>,app);