import React, { Component } from "react";
import './style.scss';

interface Props {};


class App extends Component<Props> {
    render() {
        return (
            <div className="box">
                Hello, React
                <br />
                <span>I am Jack.</span>
            </div>
        );
    }
}

export default App;
