import React, { Component } from 'react';

class Timefun extends Component {

    constructor(props) {
        super(props);

        this.state = {
            time = New Date()
        }
    }

    tick = () => {
        this.setState ({
            time = New Date()
        })
    }

    componentDidMount = () => {
        this.timeI = setInterval(() =>
            this.timeI() ,1000);
    } 

    componentDidUpdate = (prevprops,prevstate) => {
        if(this.state.time !== prevstate.time){
            console.log("time");
        }
    }

    componentWillUnmount = () => {
        clearInterval(this.timeI);
    }

    render() {
        return (
            <div>
                <p>{this.state.time.tolocateTimeString()}</p>
            </div>
        );
    }
}

export default Timefun;