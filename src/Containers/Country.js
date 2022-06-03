import React, { Component } from 'react';

class Country extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            CityName : 'Surat'
        }
    }
    
    ChangeCity = () => {
        this.setState({
            CityName : 'Mumbai'
        });
    }

    render() {
        return (
             <div>
                <p>{this.state.CityName}</p>
                <button onClick={() => this.ChangeCity()}>ChangeCity</button>
            </div>
        );
    }
}

export default Country;