import React from 'react';

function CountryFun(props) {

    const[CityName, setCityName] = useState('Surat...');

    const ChangeCity = () => {
        setCityName('Mumbai...');
    }

    return (
        <div>
                <p>{CityName}</p>
                <button onClick={() => ChangeCity()}>ChangeCity</button>
        </div>
    );
}

export default CountryFun;