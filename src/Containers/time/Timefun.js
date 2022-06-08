import React, { Component } from 'react';

class Timefun extends Component {

    constructor(props) {
        super(props);

        this.state = {
            time : new Date()
        }
    }

    tick = () => {
        this.setState ({
            time : new Date()
        })
    }

    componentDidMount = () => {
        this.timeI = setInterval(() =>
            this.tick() ,1000);
    } 

    componentDidUpdate = (prevprops,prevstate) => {
        if(this.state.time !== prevstate.time){
            console.log("componentDidUpdate");
        }
    }

    componentWillUnmount = () => {
        clearInterval(this.timeI);
    }

    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Timefun;